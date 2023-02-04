import { useState } from "react";
import Logo from "../components/assets/images/FoodLover_logo.png";
import Navbar from "../components/Navbar";
const Title = () => (
  <a href="/">
    <img className="h-20" alt="loading..." src={Logo} />
  </a>
);

export default Header = () => {
  const [isLogedIn, setIsLoggedIn] = useState("false");
  return (
    <div className="flex bg-red-700 h-20 justify-between shadow-lg">
      <Title />
      <div className="flex">
        <div className="navbar-items">
          <Navbar/>
        </div>
        <button className="h-3 py-6 px-5 text-white" onClick={() => setIsLoggedIn(!isLogedIn)}>
          {isLogedIn ? "LogOut" : "Login"}
        </button>
      </div>
    </div>
  );
};
