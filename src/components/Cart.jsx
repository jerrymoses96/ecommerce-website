import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  deleteCart,
  deleteItems,
  removeItems,
} from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

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
    <div className="flex flex-col gap-4 items-center my-10">
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={handleclear}
      >
        Clear Cart
      </button>
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
            <p>Quantity: {item.quantity}</p>
            <p>{item.price.sellingPrice.formattedValue}</p>
          </div>

          <div className="flex ">
            <button
              className="px-3 border rounded-l-full border-black"
              onClick={() => handleAdd(item)}
            >
              +
            </button>
            <button
              className=" px-3 rounded-r-full border border-black"
              onClick={() => handledelete(item.productId)}
            >
              -
            </button>
            <button
              className="bg-black text-white rounded-lg p-2 ml-4  "
              onClick={() => handleFulldelete(item.productId)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
