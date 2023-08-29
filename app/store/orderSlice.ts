import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
    id: string;
    matchId: number;
    type: 'buy' | 'sell';
    qty: number;
    price: number;
    paymentType: 'inr' | 'crypto';
}

interface OrderState {
    orders: Order[];
}

const initialState: OrderState = {
    orders: [],
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            console.log(action.payload);
            const { matchId, price, qty, paymentType, type } = action.payload;
            const existingOrder = state.orders.find(
                (order: any) => order.matchId === matchId && order.price === price && order.paymentType === paymentType && order.type === type
            );
            
            if (existingOrder) {
                // Update the existing order's quantity
                existingOrder.qty= Math.floor(existingOrder.qty)+ Math.floor(qty);
              } else {
                // Create a new order
                state.orders.push(action.payload);
              }
        },
        // Add other reducers as needed
    },
});

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;
