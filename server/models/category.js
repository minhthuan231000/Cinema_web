module.exports = (sequelize, Datatypes) => {
    var Category = sequelize.define("Category", {
      category_name: {
        type: Datatypes.STRING,
        allowNull: false
      },
    });
    Category.associate = function (models) {
        Category.hasMany(models.Movie, {
            foreignKey: 'category_id',
            sourceKey: 'id',
            as: 'movies'
        });
    }
    return Category;
  }
  