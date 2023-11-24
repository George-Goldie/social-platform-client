const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Mock premium users (replace with database in a real application)
const premiumUsers = [];

// Payment endpoint - requires authentication
router.post('/pay', authMiddleware, (req, res) => {
  const userId = req.user.userId;

  // Check if the user is already a premium member
  if (premiumUsers.includes(userId)) {
    return res.status(400).json({ success: false, message: 'User is already a premium member' });
  }

  // Add the user to the premium members list
  premiumUsers.push(userId);

  res.json({ success: true, message: 'Payment successful, user is now a premium member' });
});

module.exports = router;
