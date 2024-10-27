// src/components/Header.jsx
import React from 'react';

const Header = ({ title, image }) => {
  return (
    <header>
      <img src={image} alt="Logo" />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
