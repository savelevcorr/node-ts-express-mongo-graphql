/**
 * Check for production mode.
 * Checking based on value of process.env.NODE_ENV
 * @return {boolean}
 */
const isProduction = () => process.env.NODE_ENV === 'production';

module.exports = isProduction;