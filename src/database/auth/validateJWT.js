const jwt = require('jsonwebtoken');
const { User } = require('../models');

require('dotenv');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const email = await User.findOne({ where: { email: decoded.data } });

    if (!email) {
      return res
        .status(401)
        .json({ message: 'Expired or invalid token' });
    }

    req.email = email.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
