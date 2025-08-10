import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import ProductListing from './ProductListing';
import ShoppingCart from './ShoppingCart';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </Router>
  );
}
