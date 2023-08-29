"use client"
import React from 'react';

interface Order {
  id: string;
  matchId:number;
  type: 'buy' | 'sell';
  qty: number;
  price: number;
  paymentType: 'inr' | 'crypto';
}

interface OrderBookProps {
  orders: Order[];
}

const OrderBook: React.FC<OrderBookProps> = ({ orders }) => {
    console.log(orders);
  return (
    <div>
      <h2>Order Book</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order.type === 'buy' ? 'Buy' : 'Sell'} {order.qty} @ {order.price} {order.paymentType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderBook;
