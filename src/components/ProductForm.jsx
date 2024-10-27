// src/components/ProductForm.jsx
import React, { useState } from 'react';

const ProductForm = ({ onOrder }) => {
  const products = ['Product 1', 'Product 2', 'Product 3'];
  const prices = [10, 20, 30];
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleOrderClick = () => {
    const productName = products[selectedProductIndex];
    const price = prices[selectedProductIndex];
    onOrder(productName, price, quantity);
  };

  return (
    <div className="product-form">
      <select onChange={(e) => setSelectedProductIndex(e.target.value)} value={selectedProductIndex}>
        {products.map((product, index) => (
          <option key={index} value={index}>{product}</option>
        ))}
      </select>
      <div>
        <button onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>
      <button onClick={handleOrderClick}>Order</button>
    </div>
  );
};

export default ProductForm;
