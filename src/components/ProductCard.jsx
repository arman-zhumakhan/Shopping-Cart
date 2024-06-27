import { CartContext } from "../App";
import { useContext } from "react";
import PropTypes from 'prop-types';

import '../styles/productCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="productItem">
            <img className="productImage" src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <h4>{product.category}</h4>
            <h5>${product.price}</h5>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
        category: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
}

export default ProductCard;