import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={`https://picsum.photos/200?random=${product.id}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.available ? 'In Stock' : 'Out of Stock'}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
    );
};

export default ProductCard;
