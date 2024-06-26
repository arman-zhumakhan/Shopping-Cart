import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

import '../styles/navbar.css'

const NavBar = () => {
    const { cart } = useContext(CartContext);
    const cartSize = cart.length;

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h2>Shopping Website</h2>
            </div>
            <div className="navbar-center">
                <Link to="/">Main Page</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">
                {cartSize > 0 && <span className="cart-size">{cartSize}</span>}
                <img src="src/assets/icons/shopping-cart.png" alt="shopping cart" width="20" height="20" className="icon" />
                    Shopping Cart
                </Link>
                <Outlet />
            </div>
            <div className="navbar-right">
                <Link to="/" className="logout">Log Out</Link>
            </div>
        </nav>
    )
}

export default NavBar;