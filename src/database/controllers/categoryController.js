const categoryService = require('../services/categoryService');

const createCategory = async (req, res, next) => {
  try {
    const { name: categoryName } = req.body;
    if (!categoryName) {
      return res.status(400).json({ message: '"name" is required' });
    }
    await categoryService.createCategory(categoryName);
    return res.status(201).json({ name: categoryName });
} catch (error) {
  next(error);
  }
};

module.exports = {
  createCategory,
};
