import React from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import Hero from '../components/Hero';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="container">
      <Hero></Hero>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
