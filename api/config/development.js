const dotenv = require("dotenv");
const path = require("path");

if (!process.env.HOST) {
  dotenv.config({
    path: path.join(__dirname, "..", ".env.example"),
  });
}

module.exports = {
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USERNAME,
  password: "sami@1221",
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
  logging: true,
};
