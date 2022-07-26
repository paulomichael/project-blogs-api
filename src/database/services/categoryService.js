const { Op } = require('sequelize');
const { Category } = require('../models');

const verifyCategory = async (categoriesId) => {
  // const { categories } = await Category.findAndCountAll({
  const { rows } = await Category.findAndCountAll({
    where: {
      id: {
        [Op.in]: categoriesId,
      },
    },
  });
//  console.log('--------------> rows:', rows);
  if (rows.length === 0) {
    // return { status: 400, message: '"categoryIds" not found' };
    throw new Error('"categoryIds" not found');
  } 
  // const categoryExists = await Category.findOne({ where: { id: categoryId } });
//  if (categoryExists) {
//    return { status: 409, message: 'Category already exists' };
//  }
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = {
//  createCategory,
  getAllCategories,
  verifyCategory,
};
