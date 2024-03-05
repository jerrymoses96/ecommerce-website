import { Link } from "react-router-dom";
import thankyouimage from "../assets/orderconfirm.png";
import { TiTick } from "react-icons/ti";
import { useContext } from "react";
import { orderContext } from "../App";

const ThankYouEmail = () => {
  const { setorder } = useContext(orderContext);

  const handleclick = () => {
    setorder(true);
  };

  return (
    <div className=" flex items-center gap-20    justify-center mt-10 mb-40">
      <img className="w-[400px]" src={thankyouimage} />
      <div className="w-[460px]">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          {" "}
          <TiTick size={60} className="text-green-500 mr-1" /> Thank you for
          shopping!
        </h1>
        <p className="text-gray-900 font-semibold mb-4">
          Your order number is{" "}
          <span className="font-bold text-green-500">7DVJGTZLSK</span>.
        </p>
        <p className="text-gray-900 font-semibold mb-2">Whats next?</p>
        <ul className="list-disc pl-5">
          <li className="text-gray-500 mb-4 text-sm">
            We will send confirmation of the order and information about its
            progress by email.
          </li>
          <li className="text-gray-500 mb-4 text-sm">
            The order will be processed after your payment is confirmed.
          </li>
          <li className="text-gray-500 mb-4 text-sm">
            In case of problems with the payment, you will receive a new link to
            renew the payment to the e-mail address provided.
          </li>
          <li className="text-gray-500 mb-4 underline text-sm cursor-pointer">
            Please feel free to contact us if you have any questions.
          </li>
        </ul>
        <Link to="/">
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-light py-2 px-6 rounded mr-5">
            HOME
          </button>
        </Link>
        <Link to="/orderdetails">
          <button
            onClick={handleclick}
            className="bg-green-700 hover:bg-green-900 text-white font-light py-2 px-6 rounded"
          >
            ORDER DETAILS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouEmail;
