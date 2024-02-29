import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(AppStore);
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
        <PersistGate persistor={persistor}>
          <div className="overflow-x-hidden w-[100%] ">
            <Header />
            <Outlet />
            <Footer />
          </div>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </PersistGate>
      </Provider>
    </userContext.Provider>
  );
};

export default App;
