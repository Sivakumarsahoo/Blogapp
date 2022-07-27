require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const blogsRoutes = require('./routes/blogs');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// connect to database
connectDB();

// routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogsRoutes);

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});