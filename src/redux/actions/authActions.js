export const login = (userData) => {
    // Implement authentication logic, dispatch the user data to the store
    return {
      type: 'LOGIN',
      payload: userData,
    };
  };
  