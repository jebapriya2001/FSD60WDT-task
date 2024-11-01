// src/Cart.js
import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cartItems, totalQuantity, totalAmount } = useCart();

    return (
        <div>
            <h2>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))
            )}

            <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                <p>Total Quantity: {totalQuantity}</p>
                <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Cart;
