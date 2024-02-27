import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import React, { useContext, useEffect, useState } from "react";

export const userContext = React.createContext();

const App = () => {
  const [userdata, setuserdata] = useState({});
  const updateUserData = (action) => {
    switch (action.type) {
      case "LOGOUT":
        setuserdata(null);
        localStorage.clear();
        break;
      case "LOGIN":
        setuserdata(action.payload);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setuserdata(JSON.parse(localStorage.getItem("user_data")));
  }, []);
  return (
    <userContext.Provider value={{ userdata, updateUserData }}>
      <Provider store={AppStore}>
        <div className="overflow-x-hidden w-[100%] ">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
    </userContext.Provider>
  );
};

export default App;
