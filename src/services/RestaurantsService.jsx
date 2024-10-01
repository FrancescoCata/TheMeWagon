import instance from "./Instance";

// Fetch all restaurants
export const getRestaurants = async () => {
  try {
    const response = await instance.get('/restaurants/');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching restaurants:', error);
  }
};

// Fetch a single restaurant by ID
export const getRestaurantById = async (id) => {
  try {
    const response = await instance.get(`/restaurants/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching restaurant with ID ${id}:`, error);
  }
};