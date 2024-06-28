/* eslint-disable react/prop-types */
import ProductCard from '../components/ProductCard.jsx';
import '../styles/products.css';

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
    return (
        <div className="main">
            <h2>Products</h2>
            <div className="products">
                {products.map((product) => {
                        return <ProductCard key={product.id} product={product} />;
                    })}
            </div>
        </div>
    )
}

export default Products;