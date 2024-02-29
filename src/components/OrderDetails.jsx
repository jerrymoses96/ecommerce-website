import React from 'react';
import { useSelector } from 'react-redux';

const OrderDetails = () => {
    const cartItems =useSelector((store)=>store.cart.items)
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between border-b pb-2">
        <h1 className="text-xl font-medium">Order Details</h1>
      </div>
      <div className="py-4">
        {/* Replace with actual date information */}
        <p className="text-gray-500">Order date: 2024-02-29</p>
        {/* Replace with estimated delivery information */}
        <p className="text-gray-500">Estimated delivery: May 14, 2022 (Placeholder)</p>
      </div>
      <div className="border-b pb-2">
        <h2 className="text-lg font-medium mb-2">Items</h2>
        {cartItems.map((item) => (
          <div key={item.productId} className="flex justify-between py-2">
            <div>
              <p className="font-medium">{item.productname}</p>
              <p className="text-gray-500">{item.productColor}</p>
            </div>
            <p className="font-medium">
              {/* Display the formatted selling price here */}
              {item.price.sellingPrice.formattedValue}
            </p>
            <p className="text-gray-500">Qty: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between pt-4">
        <div>
          <h2 className="text-lg font-medium mb-2">Payment</h2>
          <p>Payment method details (to be added)</p>
        </div>
        {/* Display the total order amount here */}
        <p className="font-medium">
          {calculateTotal(cartItems)}
        </p>
      </div>
      <div className="pt-4">
        <h2 className="text-lg font-medium mb-2">Delivery</h2>
        <p>
          {/* Delivery address and phone number (to be added) */}
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
