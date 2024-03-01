import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Body from "./components/Body.jsx";
import Footwear from "./components/Shoe.jsx";
import Womenswear from "./components/Womenswear.jsx";
import Menswear from "./components/Menswear.jsx";
import Watches from "./components/Watches.jsx";
import Bags from "./components/Bags.jsx";
import Home from "./components/Home.jsx";
import Kids from "./components/Kids.jsx";
import Jewellery from "./components/Jewellery.jsx";
import Gadgets from "./components/Gadgets.jsx";
import Cart from "./components/Cart.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Cancel from "./components/Cancel.jsx";
import ThankYouEmail from "./components/ThankYouEmail.jsx";
import OrderDetails from "./components/OrderDetails.jsx";
import SearchComponent from "./components/SearchComponent.jsx";
import ViewProduct from "./components/ViewProduct.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/footwear",
        element: <Footwear />,
      },
      {
        path: "/womenswear",
        element: <Womenswear />,
      },
      {
        path: "/menswear",
        element: <Menswear />,
      },
      {
        path: "/watches",
        element: <Watches />,
      },
      {
        path: "/bags",
        element: <Bags />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/jewellery",
        element: <Jewellery />,
      },
      {
        path: "/gadgets",
        element: <Gadgets />,
      },
      {
        path: "/westside",
        element: <Womenswear />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/auth/create",
        element: <SignUp />,
      },

      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/success",
        element: <ThankYouEmail />,
      },
      {
        path: "/cancel",
        element: <Cart />,
      },
      {
        path: "/orderdetails",
        element: <OrderDetails />,
      },
      {
        path: "/search",
        element: <SearchComponent />,
      },
      {
        path: "/viewproduct/:id",
        element: <ViewProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
