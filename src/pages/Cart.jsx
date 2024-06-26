import { CartContext } from "../App";
import { useContext } from "react";


const Cart = () => {
    const { cart } = useContext(CartContext);
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((product) => {
                    return <li key={product.id}>
                        <img src={product.image} alt={product.title} width="150" />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Cart;