const express = require('express');
const router = express.Router();

const { getSampleData } = require('../controllers/sampleController');

/**
 * @route GET /api/sample
 * @description Get sample data from the API
 * @returns {object} - Sample response data
 */
router.get('/sample', getSampleData);

module.exports = router;
