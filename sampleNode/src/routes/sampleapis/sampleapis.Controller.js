/**
 * @description Handle a sample API request
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - Sample response data
 */
const getSampleData = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Sample API endpoint',
        data: {
            id: 1,
            name: 'Sample Data'
        },
        timestamp: new Date().toISOString()
    });
};

module.exports = {
    getSampleData
};
