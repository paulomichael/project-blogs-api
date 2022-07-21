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

 //  const { allUsers } = await User.findAll({
 //    attributes: ['id', 'displayName', 'email', 'image'] });
//  const { allUsers } = await User.findAll({
//    attributes: { exclude: ['password'] },
//  });
//  console.log('============> userService.getAllUsers:allUsers: ', allUsers);
  // if (!allUsers) {
  //   return { status: 409, message: 'No Users!!!' };
  // }
  // allUsers.map((user) => {
  //   console.log(user.dataValues);
  //   return user.dataValues;
  // });

//  return allUsers;
};

module.exports = {
  createUser,
  getAllUsers,
};
