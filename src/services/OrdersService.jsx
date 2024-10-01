import instance from "./Instance";

// Create a new order (POST)
export const createOrder = async (orderData) => {
  try {
    const response = await instance.post('/orders/', orderData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating order:', error);
  }
};

// Fetch an order by its ID
export const getOrderById = async (id) => {
  try {
    const response = await instance.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching order with ID ${id}:`, error);
  }
};
