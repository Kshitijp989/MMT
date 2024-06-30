const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

const start = async () => {
    await connectDB();
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};
app.use(express.json({ extended: false }));


app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin/flights', require('./routes/flightRoutes'));
app.use('/api/admin/hotels', require('./routes/hotelRoutes'));
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


module.exports = start;
