import instance from "./Instance";

// Get all bookings (GET)
export const getBookings = async () => {
  try {
    const response = await instance.get('/api/bookings');
    return response.data;
  } catch (error) {
    throw new Error('Error getting bookings:', error);
  }
};

// Create a new order (POST)
export const createBooking = async (obj) =>{
  try{
    const response = await instance.post('/api/bookings', obj)
    return response.data
  } catch (error) {
    throw new Error('Error creating booking:', error);
  }
}

