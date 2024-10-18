import instance from "./Instance";

// Fetch all reviews
export const getReviews = async () => {
  try {
    const response = await instance.get('/api/reviews');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching reviews:', error);
  }
};

// POST new review
export const postReview = async (obj) =>{
    try {
        const response = await instance.post('/api/reviews', obj);
        return response.data;
      } catch (error) {
        throw new Error('Error posting a review:', error);
      }
}