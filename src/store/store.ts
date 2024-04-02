import { configureStore } from '@reduxjs/toolkit';
import userSlice, { JWT_PER_STATE } from './userSlice';
import { saveState } from './storage';
import  cartSlice, { CART_PER_STATE }  from './cartSlise';

export const store = configureStore(
    {
        reducer: {
            user: userSlice,
            cart: cartSlice,
        }
    }
);

store.subscribe(()=>{
    saveState({jwt: store.getState().user.jwt}, JWT_PER_STATE);
    saveState(store.getState().cart, CART_PER_STATE);

});

export type RootState = ReturnType<typeof store.getState>

export type AppDispath = typeof store.dispatch