const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const paymentRoutes = require('./routes/payment');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
