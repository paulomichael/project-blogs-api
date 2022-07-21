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

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userService.getAllUsers();
   if (allUsers && allUsers.status) {
     return res.status(allUsers.status).json({ message: allUsers.message });
   }
   res.status(200).json(allUsers);
} catch (error) {
  next(error);
}
};

const getUserById = async (req, res, next) => {
  try {
    const { id: userId } = req.params;
    const user = await userService.getUserById(userId);
   if (user && user.status) {
     return res.status(user.status).json({ message: user.message });
   }
   res.status(200).json(user);
} catch (error) {
  next(error);
}
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
