import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <nav>
        <Link to="/products" style={{ marginRight: 15 }}>Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div>
        🛒 <span>{totalQuantity}</span>
      </div>
    </header>
  );
}
