// src/components/CartPage.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import Cart from './Cart';

const CartPage = () => {
  const dispatch = useDispatch();

  // src/components/CartPage.js
useEffect(() => {
    fetch('https://drive.google.com/file/d/1fOadeM1liwbUK38z92F0XYugk2jwqK2r/view?usp=share_linkhttps://drive.google.com/uc?id=1fOadeM1liwbUK38z92F0XYugk2jwqK2r')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check the structure of the data here
        data.forEach(item => {
          dispatch(addToCart(item));
        });
      })
      .catch(error => console.error('Fetch error:', error));
  }, [dispatch]);
  

  return <Cart />;
};

export default CartPage;
