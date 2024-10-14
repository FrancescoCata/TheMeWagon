import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../store/slices/RestaurantSlice'; 
import authReducer from '../store/slices/AuthSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    auth: authReducer
  },
});

export default store;