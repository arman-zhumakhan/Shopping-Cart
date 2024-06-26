/* eslint-disable react/prop-types */
import { CartContext } from "../App";
import { useContext } from "react";


async function fetchProducts() {
    let url = 'https://fakestoreapi.com/products';
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  
const products = await fetchProducts();
// output
// [
//   {
//       id:1,
//       title:'...',
//       price:'...',
//       category:'...',
//       description:'...',
//       image:'...'
//   },
// ]

const Products = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => {
                    return <li key={product.id}>
                        <img src={product.image} alt={product.title} width="150" />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Products;