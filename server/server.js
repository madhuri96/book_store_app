const express = require('express');
const connectDB = require('./config/database');
const itemRoutes = require('./routes/routes');

//require passport and JWT Strategy for auth
const passport = require('passport');

//use of JWT token
const passportJWT = require('./config/passport-jwt-strategy');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

app.use(passport.initialize());

// Routes
app.use('/api/items', itemRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
