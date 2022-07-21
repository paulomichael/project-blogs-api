const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    name: DataTypes.STRING,
  }, {
    tableName: 'Categorys',
    timestamps: false
  });
//   Category.associate = (models) => {
//     Category.hasMany(models.BlogPost, {
//       foreignKey: 'userId', as: 'user',
//     })
//   };

  return Category;
};

module.exports = Category;
