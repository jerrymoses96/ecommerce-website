import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { userContext } from "../App";


export default function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const { updateUserData } = useContext(userContext);
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    setmessage("");
    e.preventDefault();

    axios
      .post(`${BASE_URL}/auth/register/`, { email, password, first_name: name })
      .then((Response) => {
        let data = Response.data.data;
        let status_code = Response.data.StatusCode;
        if (status_code === 6000) {
          localStorage.setItem("user_data", JSON.stringify(data));
          updateUserData({ type: "LOGIN",payload:data })
          navigate("/");
        } else {
          setmessage(Response.data.message);
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          setmessage(error.response.data.detail);
        }
      });
  };

  return (
    <div className="min-h-screen flex p-4 mb-40 items-center">
      <div className="w-3/5 p-12">
        <div className="">
          <img
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/e176/15cf/837e/65d2/2069/a406/a4fd/43a2/a404/a506/a506.jpg"
            alt="Image"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
      <div className="bg-gray-300 w-2/5 flex items-end justify-center rounded-xl p-12">
        <div className="pb-12 w-full">
          <h3 className="text-2xl font-bold mb-6">Register into Account</h3>
          <p className="text-lg mb-8">
            Create an account to access all the features
          </p>
          <form className="w-full" onSubmit={HandleSubmit}>
            <div className="mb-6">
              <input
                onChange={(e) => setname(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                className="p-4 w-full border border-gray-400 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                onChange={(e) => setemail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className="p-4 w-full border border-gray-400 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="p-4 w-full border border-gray-400 rounded-lg focus:outline-none"
              />
            </div>
            <Link to="/auth/login" className="text-blue-600 text-lg block mb-6">
              Login Now
            </Link>
            {message && (
              <p className="text-center my-2 text-red-700">{message}</p>
            )}
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white px-8 py-5 rounded-lg text-lg">
                Create an Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
