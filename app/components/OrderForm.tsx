"use client"
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import React, { useEffect, useState } from 'react';

interface OrderFormProps {
    onPlaceOrder: (orderData: any) => void; // Replace 'any' with the actual type
}

const OrderForm: React.FC<OrderFormProps> = ({ onPlaceOrder }) => {
    const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
    const [qty, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [paymentType, setPaymentType] = useState<'inr' | 'crypto'>('inr');
    const selectedMatchId = useSelector((state: RootState) => state.selectedMatch);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedMatchId !== undefined) {
            const orderData = {
                matchId: selectedMatchId,
                type: orderType,
                qty,
                price,
                paymentType,
            };

            // Call the onPlaceOrder function with orderData
            onPlaceOrder(orderData);
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="border p-4">
            <h2>{orderType === 'buy' ? 'Buy' : 'Sell'} Order</h2>
            <label>
                Quantity: <input type="number" value={qty} onChange={(e) => setQuantity(e.target.value)} />
            </label>
            <label>
                Price: <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <div className="flex">
                <label className="mr-2">
                    <input
                        type="radio"
                        value="inr"
                        checked={paymentType === 'inr'}
                        onChange={() => setPaymentType('inr')}
                    />
                    INR
                </label>
                <label>
                    <input
                        type="radio"
                        value="crypto"
                        checked={paymentType === 'crypto'}
                        onChange={() => setPaymentType('crypto')}
                    />
                    Crypto
                </label>
            </div>
            <label>
                <input
                    type="radio"
                    value="buy"
                    checked={orderType === 'buy'}
                    onChange={() => setOrderType('buy')}
                />
                Buy
            </label>
            <label>
                <input
                    type="radio"
                    value="sell"
                    checked={orderType === 'sell'}
                    onChange={() => setOrderType('sell')}
                />
                Sell
            </label>
          
            {(!selectedMatchId || selectedMatchId === null || selectedMatchId == '') && <div>Please select a match for bid</div>}

            <button className={`bg-blue-500 text-white px-4 py-2 rounded ${(!selectedMatchId || selectedMatchId === null || selectedMatchId == '') ?  'btn-disabled' :'' }`} disabled={(!selectedMatchId || selectedMatchId === null || selectedMatchId == '') ? true : false}>Place Order</button>
        </form>
    );
};

export default OrderForm;
