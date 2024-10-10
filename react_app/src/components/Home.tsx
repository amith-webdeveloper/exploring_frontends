import React from 'react';
import ProductList from './ProductList';
import styles from '../styles/Home.module.css';

interface HomeProps {
  onLogout: () => void;
}

const Home: React.FC<HomeProps> = ({ onLogout }) => {
  return (
    <div className={styles.home}>
      <h1>Welcome to our Ecommerce Store</h1>
      <button className={styles.logoutButton} onClick={onLogout}>Logout</button>
      <ProductList />
    </div>
  );
};

export default Home;