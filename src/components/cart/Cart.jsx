import React, { useState, useMemo } from 'react';
import { ShoppingCart, Calendar, X } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import Modal from '../common/Modal';
import OrderBill from './OrderBill';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onPlaceOrder }) => {
  const [deliveryDate, setDeliveryDate] = useState('');
  const [isBillVisible, setIsBillVisible] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const totalItems = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);
  const totalPrice = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [cartItems]);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    if (!deliveryDate) {
      alert("Please select a delivery date!");
      return;
    }
    const finalOrder = {
      items: cartItems,
      totalItems,
      totalPrice,
      deliveryDate,
      orderDate: new Date().toISOString().split('T')[0],
      orderId: `ORD-${Date.now()}`
    };
    setOrderData(finalOrder);
    setIsBillVisible(true);
    onPlaceOrder(finalOrder);
  };
  
  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Order for tomorrow onwards
    return today.toISOString().split('T')[0];
  };

  return (
    <>
      <Card className="w-full max-w-md mx-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center">
            <ShoppingCart className="mr-3 text-pink-500" /> Your Cart
          </h2>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty. Add some sweets!</p>
          ) : (
            <>
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border rounded-lg">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-lg">-</button>
                        <span className="px-3">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-lg">+</button>
                      </div>
                      <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700">
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="my-6" />
              <div className="space-y-3 text-lg">
                <div className="flex justify-between"><span>Total Items:</span> <span className="font-bold">{totalItems}</span></div>
                <div className="flex justify-between"><span>Total Price:</span> <span className="font-bold text-pink-500">₹{totalPrice.toFixed(2)}</span></div>
              </div>
              <div className="mt-6">
                <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-2  items-center">
                    <Calendar className="mr-2" size={18}/> Select Delivery Date
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  value={deliveryDate}
                  min={getMinDate()}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <Button onClick={handlePlaceOrder} className="w-full mt-6 text-lg">
                Place Order & Generate Bill
              </Button>
            </>
          )}
        </div>
      </Card>
      
      <Modal isOpen={isBillVisible} onClose={() => setIsBillVisible(false)} title="Client Order Bill">
        {orderData && <OrderBill order={orderData} />}
      </Modal>
    </>
  );
};

export default Cart