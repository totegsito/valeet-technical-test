module.exports = {
  hostAddress: process.env.HOST_ADDRESS || 'localhost',
  verifyTokenExpiration: process.env.VERIFY_TOKEN_EXPIRATION || 86400000,
  jwtSecretKey: process.env.JWT_SECRET_KEY || '1234',
};
