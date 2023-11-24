const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock users (replace with database in a real application)
const users = [
  { id: 1, username: 'Bret', password: '92988-3874' },
  // Add more users as needed
];

const secretKey = 'your-secret-key'; // Replace with a secure key in production

// Authentication endpoint
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Create a JWT token and send it back
    const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;

