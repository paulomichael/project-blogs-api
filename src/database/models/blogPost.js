const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published:{
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updated:{
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  }, {
    tableName: 'BlogPosts',
    timestamps: false
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    })
  };

  return BlogPost;
};

module.exports = BlogPost;
