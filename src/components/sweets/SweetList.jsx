import React from 'react'
import { Filter } from 'lucide-react';
import { categories } from '../../data/sweets';
import SweetItem from './SweetItem';
import Button from '../common/Button';



const SweetList = ({ sweets, onAddToCart, filter, setFilter }) => (
  <div className="w-full">
    <div className="mb-6 p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-gray-700 mb-3 flex items-center"><Filter size={20} className="mr-2 text-pink-500"/>Filter Sweets</h2>
        <div className="flex flex-wrap gap-2">
            {categories.map(category => (
                <Button 
                    key={category} 
                    onClick={() => setFilter(category)}
                    variant={filter === category ? 'primary' : 'secondary'}
                >
                    {category}
                </Button>
            ))}
        </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sweets.map(sweet => (
        <SweetItem key={sweet.id} sweet={sweet} onAddToCart={onAddToCart} />
      ))}
    </div>
  </div>
);

export default SweetList