import { CartContext } from "../App";
import { useContext } from "react";
import CartItem from '../components/CartItem.jsx';


const Cart = () => {
    const { cart } = useContext(CartContext);
    const cartSize = cart.length;
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
    return (
        <div>
            <div className="cartHeader">
                <h2>Cart</h2>
                <h3>Total: ${totalPrice}</h3>
                <h4>Cart Size: {cartSize}</h4>
            </div>
            <div>
                {cart.map((product) => {
                    return <CartItem key={product.id} product={product} />;
                })}
            </div>
        </div>
    )
}

export default Cart;