'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Edit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Edit.init({
    about_me: DataTypes.TEXT,
    cont1: DataTypes.STRING,
    cont2: DataTypes.STRING,
    cont3: DataTypes.STRING,
    cont4: DataTypes.STRING,
    cont5: DataTypes.STRING,
    link1: DataTypes.STRING,
    link2: DataTypes.STRING,
    link3: DataTypes.STRING,
    link4: DataTypes.STRING,
    link5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Edit',
  });
  return Edit;
};