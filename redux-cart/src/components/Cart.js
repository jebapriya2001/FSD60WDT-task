// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; // Prevent negative quantity
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x 
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
              {item.quantity}
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Quantity: {totalQuantity}</h3>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
