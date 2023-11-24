import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// Import global styles
import '../styles/global.css';

// Import specific styles
import '../styles/cards.css';

const Feed = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/posts');
  
          // Assuming your backend returns an array of posts in the response
          const fetchedPosts = response.data;
  
          // Dispatch an action to update the state with the fetched posts
          // dispatch(updatePostsAction(fetchedPosts));
  
          console.log('Posts fetched successfully');
        } catch (error) {
          console.error('Error fetching posts:', error.message);
        }
      };
  
      fetchPosts();
    }, [dispatch]);
  
    return (
      <div>
        {/* ... your component rendering */}
      </div>
    );
  };
  
  export default Feed;