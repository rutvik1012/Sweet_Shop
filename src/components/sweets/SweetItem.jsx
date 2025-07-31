import React from 'react'
import Card from '../common/Card';
import Button from '../common/Button';

const SweetItem = ({ sweet, onAddToCart }) => (
  <Card className="flex flex-col h-full">
    <img src={sweet.image} alt={sweet.name} className="w-full h-40 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/cccccc/ffffff?text=Image+Not+Found'; }} />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-gray-800">{sweet.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{sweet.category}</p>
      <p className="text-xl font-semibold text-pink-500 mt-auto">₹{sweet.price.toFixed(2)}</p>
      <Button onClick={() => onAddToCart(sweet)} className="w-full mt-4">
        Add to Cart
      </Button>
    </div>
  </Card>
);
export default SweetItem