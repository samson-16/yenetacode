require("dotenv").config();
const { Sequelize } = require("sequelize");
const ProductModel = require("../model/ProductModel.js");

const config =
  process.env.NODE_ENV === "production"
    ? require("./production.js")
    : require("./development.js");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: 0,
  logging: config.logging,
});

async function createDatabaseConnection() {
  try {
    
    await sequelize.sync({ alter: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to create the database:", error);
  } finally {
    await sequelize.close();
    console.log("Connection closed successfully.");
  }
}



const productModel = ProductModel(sequelize);

const db = {
  sequelize,
  productModel,
  createDatabaseConnection,
  
};

module.exports = db;
