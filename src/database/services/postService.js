const Sequelize = require('sequelize');
const { BlogPost } = require('../models');
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

module.exports = {
  createBlogPost,
};
