import { useState, createContext } from "react";
import "./App.css";
// import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import NavBar from "./components/NavBar";

export const CartContext = createContext({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
});


function App() {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    const removeFromCart = (product) => {
        setCart(cart.filter((item) => item.id !== product.id));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </CartContext.Provider>
    );
}

export default App;
