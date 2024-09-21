// src/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Fetching JSON data and updating the cart items
    useEffect(() => {
        fetch('/cartData.json')  // Replace with the correct shareable link for direct download
            .then(response => response.json())
            .then(data => setCartItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ cartItems, totalQuantity, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
