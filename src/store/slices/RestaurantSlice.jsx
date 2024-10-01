// src/features/restaurantSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurants: [], 
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurants = action.payload; 
    },
  },
});

// Action exports
export const { setRestaurants } = restaurantSlice.actions;

// Selector to access restaurants from the store
export const getReduxRestaurants = (state) => state.restaurant.restaurants;

export default restaurantSlice.reducer;
