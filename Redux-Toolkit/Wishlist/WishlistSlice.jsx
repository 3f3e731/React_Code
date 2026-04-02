import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Wishlist: []
}
export const WishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        Add: (state, action) => {
            state.Wishlist = [...state.Wishlist, action.payload]
        },
        Remove: (state, action) => {
            state.Wishlist = state.Wishlist.filter(item => item.id !== action.payload)
        }
    }
})

export const { Add, Remove } = WishlistSlice.actions;
export default WishlistSlice.reducer;