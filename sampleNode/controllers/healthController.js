/**
 * @description Check the health status of the server
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - Status of the server
 */
const checkHealth = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is healthy',
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  checkHealth
};
