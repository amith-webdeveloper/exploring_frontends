import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types';
import styles from '../styles/ProductDetail.module.css';

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 19.99, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 29.99, description: 'Description for Product 2' },
  // Add more products as needed
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productDetail}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button className={styles.buyButton}>Buy Now</button>
    </div>
  );
};

export default ProductDetail;