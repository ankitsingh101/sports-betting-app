"use client"
import React, { useState } from 'react';
import LiveMatch from './components/LiveMatch';
import { useDispatch, useSelector } from 'react-redux';
import OrderBook from './components/OrderBook';
import { RootState } from './store/rootReducer';
import { addOrder } from './store/orderSlice';
import OrderForm from './components/OrderForm';
const BettingPage: React.FC = () => {

  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);
  
  const handlePlaceOrder = (orderData: any) => {
    // This is a simplified example, handle order placement based on your logic
    dispatch(addOrder(orderData));
  };

  const sampleMatches = [
    {
      id: '1',
      title: 'Match 1',
      description: 'Description of Match 1',
      currentBid: 100,
    },
    {
      id: '2',
      title: 'Match 2',
      description: 'Description of Match 2',
      currentBid: 150,
    },
    // Add more matches as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Sports Betting App</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {sampleMatches.map((match) => (
            <LiveMatch
              key={match.id}
              match={match}
            />
            
          ))}
          <OrderForm onPlaceOrder={handlePlaceOrder} />
        </div>
        <div>
          <OrderBook orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default BettingPage;
