// server.js

const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.port;
const app = express();

// Connect Database
//connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const start = async () => {
    await connectDB();
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  };
  
  module.exports = start;