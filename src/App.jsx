import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="overflow-x-hidden w-[100%] ">
      <Header />
      <Outlet/>
      {/* <Body /> */}
      <Footer/>
    </div>
  );
};

export default App;
