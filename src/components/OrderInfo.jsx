// src/components/OrderInfo.jsx
import React from 'react';

const OrderInfo = ({ productName, price, quantity }) => {
  return (
    <div>
      <h2>Order Info</h2>
      <p>Product Name: {productName}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default OrderInfo;
