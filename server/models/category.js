module.exports = (sequelize, Datatypes) => {
    var Category = sequelize.define("Category", {
      category_name: {
        type: Datatypes.INTEGER,
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
  