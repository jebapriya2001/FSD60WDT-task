// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import CartPage from './components/CartPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Shopping Cart</h1>
        </header>
        <main>
          <CartPage />
        </main>
      </div>
    </Provider>
  );
}

export default App;
  