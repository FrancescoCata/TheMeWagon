import instance from "./Instance";

export const getRestaurantMenu = async (category) => {
  try {
    const response = await instance.get(`/api/menu?category=${category}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching menu for restaurant`, error);
  }
};