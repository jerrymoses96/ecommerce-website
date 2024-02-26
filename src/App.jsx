import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

const App = () => {
  return (
    <Provider store={AppStore}>
      <div className="overflow-x-hidden w-[100%] ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
