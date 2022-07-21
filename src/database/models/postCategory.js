const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    categoryId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
  }, {
    tableName: 'PostCategories',
    timestamps: false
  });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    })
  };

  return PostCategory;
};

module.exports = PostCategory;
