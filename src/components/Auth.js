import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// Import global styles
import '../styles/global.css';

// Import specific styles
import '../styles/buttons.css';
import '../styles/forms.css';

const Auth = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5000/auth/login', {
          username,
          password,
        });
  
        const { token } = response.data;
  
        // Save the token to local storage or cookies for future requests
        localStorage.setItem('token', token);
  
        // You might want to dispatch a login action here as well
        // dispatch(loginAction(username));
  
        console.log('Login successful');
      } catch (error) {
        console.error('Login failed:', error.message);
      }
    };
  
    return (
      <div>
        {/* ... your login form */}
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
  
  export default Auth;