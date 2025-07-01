const express = require('express');
const router = express.Router();

const { checkHealth } = require('../controllers/healthController');

/**
 * @route GET /api/health
 * @description Check the health status of the server
 * @returns {object} - Status of the server
 */
router.get('/health', checkHealth);

module.exports = router;
