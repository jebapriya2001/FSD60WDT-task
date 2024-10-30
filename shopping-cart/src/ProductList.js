import React from 'react';

const products = [
  { id: 1, name: 'Product 1', description: 'Description 1' },
  { id: 2, name: 'Product 2', description: 'Description 2' },
  { id: 3, name: 'Product 3', description: 'Description 3' },
];

const ProductList = ({ cartItems, addToCart, removeFromCart }) => {
  const isInCart = (product) => cartItems.some((item) => item.id === product.id);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {isInCart(product) ? (
            <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
          ) : (
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
