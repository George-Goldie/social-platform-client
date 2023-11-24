const initialState = {
    posts: [],
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS':
        return {
          ...state,
          posts: action.payload,
        };
      // Add other cases for creating, updating, or deleting posts
      default:
        return state;
    }
  };
  
  export default postReducer;
  