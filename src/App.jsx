// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import OrderInfo from './components/OrderInfo';
import logo from './assets/logo.jpg'; // 

const App = () => {
  const [order, setOrder] = useState({ productName: '', price: 0, quantity: 0 });

  const handleOrder = (name, price, quantity) => {
    setOrder({ productName: name, price, quantity });
  };

  return (
    <div>
      <Header title="Product Page" image={logo} />
      <ProductForm onOrder={handleOrder} />
      <OrderInfo productName={order.productName} price={order.price} quantity={order.quantity} />
    </div>
  );
};

export default App;
