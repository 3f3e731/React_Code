import { configureStore } from '@reduxjs/toolkit';
import WishlistSlice from './features/WishlistSlice';

export const store = configureStore({
    reducer: {
        wishlist: WishlistSlice
    }
})