const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Mock posts (replace with database in a real application)
const posts = require('../data/posts.json'); // Assume you have a JSON file with posts

// Get all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// Get posts by user ID
router.get('/user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userPosts = posts.filter((post) => post.userId === userId);
  res.json(userPosts);
});

// Protected route - requires authentication
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ success: true, message: 'This is a protected route', user: req.user });
});

// Add more post-related routes as needed

module.exports = router;

