import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import styles from '../styles/ProductList.module.css';

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 19.99, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 29.99, description: 'Description for Product 2' },
  // Add more products as needed
];

const ProductList: React.FC = () => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.productItem}>
          <Link to={`/product/${product.id}`}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;