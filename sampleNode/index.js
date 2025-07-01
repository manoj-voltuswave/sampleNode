const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const healthRoutes = require('./routes/health');
const sampleRoutes = require('./sampleapi\'s/routes/sampleRoutes');

// Use routes
app.use('/api', healthRoutes);
app.use('/api', sampleRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
