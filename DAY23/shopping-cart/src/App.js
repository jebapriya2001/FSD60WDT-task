import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <h1>React Shopping Cart</h1>
      <Cart cartItems={cartItems} />
      <ProductList
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
