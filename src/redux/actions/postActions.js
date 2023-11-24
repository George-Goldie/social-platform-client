import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      // Make a request to the JSON placeholder API or your backend API
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const posts = response.data;

      dispatch({
        type: 'FETCH_POSTS',
        payload: posts,
      });
    } catch (error) {
      // Handle error, dispatch an error action if needed
      console.error('Error fetching posts:', error.message);
    }
  };
};
