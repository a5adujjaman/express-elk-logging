const express = require('express');
const app = express();
const logger = require('./logger');
const authRoutes = require('./routes/auth');

// Middleware
app.use(express.json()); // <-- very important

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express with Winston logging!');
});

app.use('/', authRoutes); // mounts /login

// Start server
app.listen(3000, () => {
  logger.info('Server running on http://localhost:3000');
});
