import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  deleteCart,
  deleteItems,
  removeItems,
} from "../utils/CartSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import { calculateTotal, calculateDiscount } from "../utils/cartUtils";
import logo from "../assets/pngwing.com.png";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const totalCost = calculateTotal(cartItems);
  const totalDiscount = calculateDiscount(cartItems);

  const dispatch = useDispatch();

  // payment integration
  const MakePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OokKeSBKKql9aQexF6PDOOXTzDlzZdBbSb9p0l7EUaV7Wl6FTSfbdiQav8Y9fqaN35GCwsmmtE3L6jWBFoUciDV00CDYptyKH"
    );

    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  const handleclear = () => {
    dispatch(deleteCart());
  };

  const handledelete = (productId) => {
    dispatch(removeItems(productId));
  };
  const handleFulldelete = (productId) => {
    dispatch(deleteItems(productId));
  };

  const handleAdd = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className="flex flex-col gap-4 items-center mb-10  ">
      <div className="relative">
        <img src="https://www.tatacliq.com/src/cart/components/img/PaymentIllustration.svg" />
        <p className="absolute top-10 left-20 text-3xl font-medium font-sans  ">
          My Bag
        </p>
      </div>

      {cartItems.length > 0 && (
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={handleclear}
        >
          Clear Cart
        </button>
      )}
      {cartItems.length > 0 ? (
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="w-[800px] h-56 flex justify-between border border-gray-400 items-center rounded-xl shadow-lg"
              >
                <div className="h-[100%]">
                  <img className="h-[100%] rounded-l-xl" src={item.imageURL} />
                </div>
                {console.log(item)}
                <div>
                  <p className="font-light">{item.productname}</p>

                  <p>₹{item.price.sellingPrice.doubleValue * item.quantity}</p>
                </div>

                <div className="flex items-center ">
                  <button
                    className=" px-3 py-1 rounded-l-full border border-black"
                    onClick={() => handledelete(item.productId)}
                  >
                    -
                  </button>
                  <p className=" px-2 py-1 border  border-black">
                    {item.quantity}
                  </p>

                  <button
                    className="px-3 py-1 border rounded-r-full border-black"
                    onClick={() => handleAdd(item)}
                  >
                    +
                  </button>
                  <button
                    className="mx-4  "
                    onClick={() => handleFulldelete(item.productId)}
                  >
                    <FaRegTrashCan size={20} color="gray" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Conditional rendering of the checkout section */}
          {cartItems.length > 0 && (
            <div>
              <div className="flex flex-col  p-4">
                <div className="flex flex-col gap-4 mb-8 border border-gray-300 rounded-lg p-4   ">
                  <h1 className="text-xl font-semibold text-gray-800">
                    Deliver To
                  </h1>
                  <div className="flex items-center justify-between text-gray-700">
                    <p>110001, Delhi</p>
                    <button className="text-orange-600 ">Change</button>
                  </div>
                  <div className=" text-center rounded-md py-1  text-gray-700 border-2 border-red-700">
                    <p className="text-red-700 font-semibold ">
                      Log In to Select/Add Address
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-8 border border-gray-300 rounded-md p-4">
                  <p className="text-lg font-bold  text-gray-700">
                    Bag Summary
                  </p>
                  <div className="flex justify-between text-gray-700">
                    <p>Bag Total</p>
                    <p className="text-gray-700 font-light">₹{totalCost}</p>
                  </div>
                  <div className="flex justify-between  text-gray-700">
                    <p>Processing Fee</p>
                    <p className="text-gray-700 font-light">₹99.00</p>
                  </div>
                  <div className="flex  justify-between items-center gap-5  text-gray-700 bg-gray-100 rounded-md px-1">
                    <p className="text-sm">See how this is calculated</p>
                    <p className="text-blue-500 text-sm ">Know More</p>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <p>Bag Subtotal</p>
                    <p className="text-gray-700 font-light">
                      ₹{totalCost + 99}
                    </p>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <p>Product Discount(s)</p>
                    <p className="text-green-500 font-light">
                      -₹{totalDiscount}
                    </p>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <p className="text-green-600 font-extralight">
                      You will save ₹{totalDiscount} on this order
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between border border-gray-300 rounded-md p-4">
                  <div>
                    <h4 className="text-gray-700 font-bold mr-3">Total</h4>
                    <p className="font-medium text-xl">
                      ₹ {totalCost + 99 - totalDiscount}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-5 py-2 bg-red-700 text-white font-normal rounded-l-full rounded-r-full shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-1 focus:ring-pink-500"
                    onClick={MakePayment}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        // Empty cart message
        <div className="flex flex-col items-center justify-center h-full ">
          <img className="w-48 mt-[-40px]" src={logo} />
          <h2 className="text-xl font-medium mb-4">Your bag is empty!</h2>
          <p className="text-gray-500 text-center">
            Let's fill it up, shall we?
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/">
              <button
                type="button"
                className="px-4 py-2 bg-slate-700 text-white font-medium rounded-md hover:bg-slate-900"
              >
                Continue Shopping
              </button>
            </Link>
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-500 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              View saved products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
