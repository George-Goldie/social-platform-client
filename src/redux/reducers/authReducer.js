const initialState = {
    user: null,
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      // Add other cases for logout, etc.
      default:
        return state;
    }
  };
  
  export default authReducer;
  