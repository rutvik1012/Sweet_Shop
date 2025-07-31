import React from 'react'

const OrderBill = () => {
const OrderBill = ({ order }) => (
    <div className="p-4 bg-gray-50 rounded-lg">
        <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-pink-600">Sweet Delights</h3>
            <p>Order Invoice</p>
        </div>
        <div className="flex justify-between text-sm mb-4">
            <div>
                <p><strong>Order ID:</strong> {order.orderId}</p>
                <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
            </div>
            <p><strong>Delivery Date:</strong> {new Date(order.deliveryDate).toLocaleDateString()}</p>
        </div>
        <table className="w-full text-left table-auto mb-4">
            <thead>
                <tr className="bg-gray-200">
                    <th className="p-2">Item</th>
                    <th className="p-2 text-center">Qty</th>
                    <th className="p-2 text-right">Price</th>
                    <th className="p-2 text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                {order.items.map(item => (
                    <tr key={item.id} className="border-b">
                        <td className="p-2">{item.name}</td>
                        <td className="p-2 text-center">{item.quantity}</td>
                        <td className="p-2 text-right">₹{item.price.toFixed(2)}</td>
                        <td className="p-2 text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="flex justify-end">
            <div className="w-full max-w-xs space-y-2">
                <div className="flex justify-between">
                    <span>Total Items:</span>
                    <span className="font-semibold">{order.totalItems}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-pink-600">
                    <span>Grand Total:</span>
                    <span>₹{order.totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">Thank you for your order!</p>
    </div>
);
}

export default OrderBill