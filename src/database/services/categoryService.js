const { Category } = require('../models');

const createCategory = async (categoryName) => {
  const categoryExists = await Category.findOne({ where: { name: categoryName } });
  if (categoryExists) {
    return { status: 409, message: 'Category already exists' };
  }
  const category = await Category.create(categoryName);
  return category;
};

module.exports = {
  createCategory,
};
