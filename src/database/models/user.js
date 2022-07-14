const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
//  const User = sequelize.define("users", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamps: false
  });
//    User.associate = (model) => {
//      User.hasMany(model.BlogPost, {
//        foreignKey: 'userId', as: 'user',
//      })
//    };

  return User;
};

module.exports = User;
