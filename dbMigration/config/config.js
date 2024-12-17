import * as dotenv  from "dotenv";

dotenv.config().parsed;

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },  
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "database_production",
    host: "127.0.0.1",
    dialect: process.env.DB_DIALECT,
  },
};
