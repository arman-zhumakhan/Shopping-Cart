import { CartContext } from "../App";
import { useContext } from "react";
import PropTypes from 'prop-types';

import '../styles/cartItem.css';

const CartItem = ({ product }) => {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="cartItem">
            <div>
                <img className="cartImage" src={product.image} alt={product.title}/>
            </div>
            <div className="itemDes">
                <h3>{product.title}</h3>
                <h4>{product.category}</h4>
                <p>{product.description}</p>
                <h5>${product.price}</h5>
                <div>
                    <button onClick={() => removeFromCart(product) }>Remove from Cart</button>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
        category: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
}

export default CartItem;