import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';

const plants = [
  { id: '1', name: 'Monstera', price: 20, thumbnail: 'https://via.placeholder.com/80', category: 'Indoor' },
  { id: '2', name: 'Fiddle Leaf Fig', price: 35, thumbnail: 'https://via.placeholder.com/80', category: 'Indoor' },
  { id: '3', name: 'Snake Plant', price: 15, thumbnail: 'https://via.placeholder.com/80', category: 'Indoor' },
  { id: '4', name: 'Succulent', price: 10, thumbnail: 'https://via.placeholder.com/80', category: 'Succulents' },
  { id: '5', name: 'Cactus', price: 12, thumbnail: 'https://via.placeholder.com/80', category: 'Succulents' },
  { id: '6', name: 'Fern', price: 18, thumbnail: 'https://via.placeholder.com/80', category: 'Outdoor' },
];

export default function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Group plants by category
  const categories = {};
  plants.forEach(plant => {
    if (!categories[plant.category]) categories[plant.category] = [];
    categories[plant.category].push(plant);
  });

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Houseplants For Sale</h1>
      {Object.keys(categories).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {categories[category].map(plant => (
              <div key={plant.id} style={{ border: '1px solid #ddd', padding: '0.5rem', width: 150 }}>
                <img src={plant.thumbnail} alt={plant.name} style={{ width: '100%' }} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={!!cartItems[plant.id]}
                >
                  {cartItems[plant.id] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
