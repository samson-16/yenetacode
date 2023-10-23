const { DataTypes } = require("sequelize");

const ProductModel = (Sequelize) => {
  const products = Sequelize.define("products", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
    },
    quantity_in_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
      allowNull: false,
    },
  });
  return products;
};
module.exports = ProductModel;