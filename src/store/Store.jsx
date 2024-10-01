import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../store/slices/RestaurantSlice'; 

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
  },
});

export default store;