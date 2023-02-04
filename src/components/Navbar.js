import { Link } from "react-router-dom";

const Navbar = ()=> {
  return (
    <ul className="flex">
        <Link to='/'><li className="py-6 px-5 text-white">Home</li></Link>
        <Link to='/About'><li className="py-6 px-5  text-white">About Us</li></Link>
        <Link to='/About'><li className="py-6 px-5  text-white">Offers</li></Link>
        <Link to='/About'><li className="py-6 px-5  text-white">Cart</li></Link>
        <Link to='/Contact'><li className="py-6 px-5  text-white">Contact</li></Link>
      </ul>
  );
};
export default Navbar;
