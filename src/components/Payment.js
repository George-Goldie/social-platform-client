import React from 'react';
import axios from 'axios';

const Payment = () => {
  const handlePayment = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('User is not authenticated');
        return;
      }

      // Include the token in the request headers
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };

      const response = await axios.post('http://localhost:5000/payment/pay', {}, config);

      console.log(response.data.message);
    } catch (error) {
      console.error('Payment failed:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default Payment;
