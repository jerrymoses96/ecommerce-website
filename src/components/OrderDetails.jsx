import React from "react";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-2/3  mx-auto">
      <div className="flex justify-between border-b pb-2">
        <h1 className="text-xl font-medium">Order Details</h1>
      </div>
      <div className="py-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-medium">ORDER ID : 362183762973</h2>
          <div>
            <button className="border border-gray-500 font-semibold rounded-lg px-4 py-1 mr-2 hover:bg-gray-100">
              Invoice
            </button>
            <button className="border bg-blue-500 text-white rounded-lg  px-4 py-1 hover:bg-blue-800 ">
              Track Order
            </button>
          </div>
        </div>
        {/* Replace with actual date information */}
        <p className="text-gray-500 mb-2">Order date: 2024-02-29</p>
        {/* Replace with estimated delivery information */}
        <p className="text-green-500">Estimated delivery: May 14, 2022</p>
      </div>
      <div className="border-b pb-2">
        <h2 className="text-lg font-medium mb-2">Items</h2>
        {cartItems.map((item) => (
          <div
            key={item.productId}
            className="flex p-2 bg-gray-100 rounded-lg mb-2 items-center"
          >
            <img
              src={item.imageURL}
              className="w-16 h-16 rounded-xl object-fill "
              alt="image"
            />
            <div className="ml-4 w-[600px]">
              <p className="font-medium">{item.productname}</p>
              <p className="text-gray-500">{item.productColor}</p>
            </div>
            <div className="ml-12">
              <p className="font-medium">
                {/* Display the formatted selling price here */}
                {item.price.sellingPrice.formattedValue}
              </p>
              <p className="text-gray-500">Qty: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between pt-4">
        <div>
          <h2 className="text-lg font-medium mb-2">Payment</h2>
          <p className="flex items-center">
            Visa **56 <span className="ml-1 mb-1"> 💳</span>
          </p>
        </div>
        {/* Display the total order amount here */}
        <p className="font-medium">{calculateTotal(cartItems)}</p>
      </div>
      <div className="pt-4">
        <h2 className="text-lg font-medium mb-2">Delivery</h2>
        <p className="w-[250px] font-light">
          4th Syama Business Centre,Opp Hindu Office, NH Bypass Rd Junction,
          Vyttila, Kochi, Kerala 682019, India
        </p>
      </div>
    </div>
  );
};

// Function to calculate the total order amount
const calculateTotal = (cartItems) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price.sellingPrice.doubleValue * item.quantity;
  });
  return `₹${total.toFixed(2)}`; // Format the total value with 2 decimal places and currency symbol
};

export default OrderDetails;
