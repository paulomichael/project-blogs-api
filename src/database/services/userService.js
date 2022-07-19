const { User } = require('../models');

const createUser = async ({ displayName, password, email, image }) => {
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return { status: 409, message: 'User already registered' };
  }
  await User.create({ displayName, password, email, image });
};

module.exports = {
  createUser,
};
