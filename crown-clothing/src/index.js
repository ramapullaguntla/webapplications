import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ProductsProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
       <CartProvider>
           <App />
      </CartProvider>
      </ProductsProvider>
    </UserProvider>
    </BrowserRouter>    
  </React.StrictMode>
);

