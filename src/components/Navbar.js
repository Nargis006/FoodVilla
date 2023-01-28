import Brand from './Brand';

export default Navbar = function(){
    return(<div className='navbar'>
    <Brand/>
    <ul className="navbar-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Offers</li>
        <li>Cart</li>
    </ul></div>);
}