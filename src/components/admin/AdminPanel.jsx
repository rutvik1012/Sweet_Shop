import React from 'react';
import { ClipboardList } from 'lucide-react';
import Card from '../common/Card';

const AdminPanel = ({ orders }) => {
    const getPrepDate = (deliveryDate) => {
        const date = new Date(deliveryDate);
        date.setDate(date.getDate() - 1); // Prep date is one day before delivery
        return date.toLocaleDateString();
    };

    return (
        <Card className="w-full">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center">
                    <ClipboardList className="mr-3 text-blue-500" /> Admin - Placed Orders
                </h2>
                {orders.length === 0 ? (
                    <p className="text-center text-gray-500">No orders have been placed yet.</p>
                ) : (
                    <div className="space-y-6">
                        {orders.map(order => (
                            <div key={order.orderId} className="p-4 border rounded-lg bg-gray-50">
                                <div className="flex flex-wrap justify-between items-start mb-3">
                                    <p className="font-bold text-lg text-blue-600">Order ID: {order.orderId}</p>
                                    <div className="text-sm text-right">
                                       <p><strong>Prepare By:</strong> <span className="text-red-500 font-semibold">{getPrepDate(order.deliveryDate)}</span></p>
                                       <p><strong>Deliver By:</strong> <span className="text-green-500 font-semibold">{new Date(order.deliveryDate).toLocaleDateString()}</span></p>
                                    </div>
                                </div>
                                
                                <table className="w-full text-left table-auto text-sm mb-3">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="p-2">Item</th>
                                            <th className="p-2 text-center">Qty</th>
                                            <th className="p-2 text-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.items.map(item => (
                                            <tr key={item.id} className="border-b">
                                                <td className="p-2">{item.name}</td>
                                                <td className="p-2 text-center">{item.quantity}</td>
                                                <td className="p-2 text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="text-right font-bold">
                                    <p>Grand Total: <span className="text-blue-600">₹{order.totalPrice.toFixed(2)}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Card>
    );
};

export default AdminPanel