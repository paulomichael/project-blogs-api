const { BlogPost } = require('../models');

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
//  const userExists = await BlogPost.findOne({ where: { email } });
//  if (userExists) {
//    return { status: 409, message: 'BlogPost already registered' };
//  }
//   const blogPost = await BlogPost.create({ title, content, categoryIds });
//   console.log('-----------> postService.createBlogPost:blogPost:', blogPost);
//   console.log('-----------> postService.createBlogPost:blogPost.userId:', blogPost.userIdid);
//   // return { id: blogPost.dataValues.id, title, content, userId: blogPost.dataValues.userId };
//   return { id: blogPost.dataValues.id, title, content, userId: blogPost.dataValues.userId };
};

// const getAllUsers = async () => {
//  const allUsers = await User.findAll({
//    attributes: { exclude: ['password'] },
//  });
//  return allUsers;
// };
// 
// const getUserById = async (userId) => {
//   const user = await User.findOne({
//     where: { id: userId },
//     attributes: { exclude: ['password'] },
//   });
// 
//   if (!user) {
//     return { status: 404, message: 'User does not exist' };
//   }
//   return user;
// };

module.exports = {
  createBlogPost,
//  getAllUsers,
//  getUserById,
};
