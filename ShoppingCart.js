import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, deleteItem, clearCart } from './cartSlice';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const items = useSelector(state => Object.values(state.cart.items));

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Your Shopping Cart</h1>
      <p>Total items: {totalQuantity}</p>
      <p>Total cost: ${totalPrice.toFixed(2)}</p>

      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
          <img src={item.thumbnail} alt={item.name} style={{ width: 80, marginRight: '1rem' }} />
          <div style={{ flexGrow: 1 }}>
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
              <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
            </div>
          </div>
        </div>
      ))}

      <button onClick={() => alert('Coming Soon!')} disabled={items.length === 0} style={{ marginRight: '1rem' }}>
        Checkout
      </button>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
