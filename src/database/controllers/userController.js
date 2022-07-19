const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await userService.createUser({ displayName, email, password, image });
    if (user && user.status) {
      return res.status(user.status).json({ message: user.message });
    }
    const token = jwt.sign({ data: email }, secret, jwtConfig);
    return res.status(201).json({ token });
} catch (error) {
  next(error);
  }
};

module.exports = {
  createUser,
};
