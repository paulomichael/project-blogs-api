const { User } = require('../models');

const createUser = async ({ displayName, password, email, image }) => {
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return { status: 409, message: 'User already registered' };
  }
  await User.create({ displayName, password, email, image });
};

const getAllUsers = async () => {
 const allUsers = await User.findAll({
   attributes: { exclude: ['password'] },
 });
 return allUsers;
};

const getUserById = async (userId) => {
  const user = await User.findOne({
    where: { id: userId },
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return { status: 404, message: 'User does not exist' };
  }
  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
