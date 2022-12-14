const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const categoryService = require('./categoryService');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
  const transaction = await sequelize.transaction();
  try {
    const post = await BlogPost.create({ title, content, userId }, { transaction });
    await categoryService.verifyCategory(categoryIds, { transaction });
    // add postId, categoryId to PostCategories too
    // await PostCategories.create({ postId, categoryId });
    await transaction.commit();
    return post.dataValues;
} catch (error) {
  await transaction.rollback();
  return { status: 400, message: '"categoryIds" not found' };
  }
};

const getAllBlogPosts = async () => {
  const allPosts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return allPosts;
};

const getBlogPostById = async (postId) => {
  try {
    const blogPost = await BlogPost.findOne({
      where: { id: postId },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ], 
    });
    console.log('------------> postService.getBlogPostById:blogPost:', blogPost);
    if (!blogPost) {
      return { status: 404, message: 'Post does not exist' };
    } 
    // return blogPost.dataValues;
    console.log('----------> postService.getBlogPostById:blogPost: ', blogPost); 
    return blogPost.dataValues;
} catch (error) {
  return { status: 404, message: 'Post does not exist' };
}
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};
