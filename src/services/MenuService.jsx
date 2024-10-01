import instance from "./Instance";

// Fetch menu for a restaurant filtered by category (Pizza) and sorted by rank
export const getRestaurantMenu = async (restaurantId, category = 'Pizza', orderBy = 'rank') => {
  try {
    const response = await instance.get(`/restaurants/${restaurantId}/menu`, {
      params: { category, orderBy },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching menu for restaurant ${restaurantId}:`, error);
  }
};