import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useContext, useState } from "react"; 
import { userContext } from "../App";
import { toast } from "react-toastify";




export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const { updateUserData } = useContext(userContext);
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    setmessage("");
    e.preventDefault();

    axios
      .post(`${BASE_URL}/auth/token/`, { username, password })
      .then((Response) => {
        console.log(Response.data);
        let data = Response.data;
        localStorage.setItem("user_data", JSON.stringify(data));
        updateUserData({ type: "LOGIN",payload:data })
        navigate("/")
        toast.success(`logged in to your account!`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          setmessage(error.response.data.detail);
        }
      });
  };
  return (
    <div className="min-h-screen flex p-4 mb-40 items-center ">
      {/* Left Container */}
      <div className="w-1/2 p-8">
        <div className="">
          <img
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/e176/15cf/837e/65d2/2069/a406/a4fd/43a2/a404/a506/a506.jpg"
            alt="Image"
            className="rounded-2xl shadow-2xl   "
          />
        </div>
      </div>

      {/* Right Container */}
      <div className="bg-gray-300 w-1/2 flex flex-col items-end justify-end rounded-lg p-8">
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-4">Login to your Account</h3>
          <p className="text-lg mb-6">Enter email and password to login</p>
          <form className="w-full" onSubmit={HandleSubmit}>
            <div className="mb-4">
              <input
                onChange={(e) => setusername(e.target.value)}
                value={username}
                type="email"
                placeholder="Email"
                className="p-4 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="p-4 w-full border rounded"
              />
            </div>
            <Link to="/auth/create/" className="text-blue-600 text-lg mb-4">
              Signup Now
            </Link>
            {message && (
              <p className="text-center my-2 text-red-700">{message}</p>
            )}
            <div className="flex justify-center ">
              <button className="bg-blue-600 text-white px-8 py-4 rounded text-lg">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
