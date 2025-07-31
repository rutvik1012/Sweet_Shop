import React, { useState, useMemo } from 'react';
import { User, ClipboardList } from 'lucide-react';
import { sweetsData } from './data/sweets';
import AdminPanel from './components/admin/AdminPanel';
import SweetList from './components/sweets/SweetList';
import Cart from './components/cart/Cart';
import Button from './components/common/Button';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isAdminView, setIsAdminView] = useState(false);
  const [placedOrders, setPlacedOrders] = useState([]);

  const filteredSweets = useMemo(() => {
    if (filter === 'All') return sweetsData;
    return sweetsData.filter(sweet => sweet.category === filter);
  }, [filter]);

  const addToCart = (sweetToAdd) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === sweetToAdd.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === sweetToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...sweetToAdd, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const handlePlaceOrder = (order) => {
    setPlacedOrders(prevOrders => [...prevOrders, order]);
    setCartItems([]); // Clear cart after placing order
  };

  return (
    <div className="bg-pink-50 min-h-screen font-sans">
      <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-40">
        <h1 className="text-3xl font-bold text-pink-500 tracking-wider">Sweet Delights</h1>
        <Button onClick={() => setIsAdminView(!isAdminView)} variant="secondary">
          <div className="flex items-center gap-2">
            {isAdminView ? <User /> : <ClipboardList />}
            <span>{isAdminView ? 'Client View' : 'Admin View'}</span>
          </div>
        </Button>
      </header>

      <main className="p-4 sm:p-6 lg:p-8">
        {isAdminView ? (
          <AdminPanel orders={placedOrders} />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <SweetList
                sweets={filteredSweets}
                onAddToCart={addToCart}
                filter={filter}
                setFilter={setFilter}
              />
            </div>
            <div className="lg:w-1/4">
              <Cart
                cartItems={cartItems}
                onUpdateQuantity={updateCartQuantity}
                onRemoveItem={removeFromCart}
                onPlaceOrder={handlePlaceOrder}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}