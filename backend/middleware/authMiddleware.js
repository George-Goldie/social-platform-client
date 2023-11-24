const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Same key as used in auth.js

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
