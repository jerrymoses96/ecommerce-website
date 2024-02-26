import { useDispatch, useSelector } from "react-redux";
import { addItems, deleteCart, deleteItems, removeItems } from "../utils/CartSlice";

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
  const handleFulldelete =(productId)=>{
    dispatch(deleteItems(productId))
  } 

  const handleAdd = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className="flex flex-col gap-4 items-center my-60">
      <button
        className="bg-orange-500 rounded-lg px-3"
        onClick={handleclear}
      >
        Clear Cart
      </button>
      {cartItems.map((item, index) => (
        <div key={index} className="w-1/3 border border-red-900 flex justify-between">
          <div>
            <p>{item.brandname}</p>
            <p>{item.productname}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-orange-600 px-3"
              onClick={() => handleAdd(item)}
            >
              +
            </button>
            <button
              className="bg-orange-500 px-3"
              onClick={() => handledelete(item.productId)}
            >
              -
            </button>
            <button
              className="bg-black text-white rounded-lg"
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
