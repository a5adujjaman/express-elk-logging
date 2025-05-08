const express = require('express');
const router = express.Router();
const logger = require('../logger');

// Dummy login handler
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Dummy check (replace with real DB logic)
  if (email === 'code1@gmail.com' && password === '123456') {
    logger.info(`Login success: ${email}`);
    return res.status(200).json({ message: 'Login successful' });
  } else {
    logger.warn(`Login failed for: ${email}`);
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
