const dotenv = require('dotenv');

dotenv.config();

const appConfig = {
  host: process.env.APP_HOST,
  port: process.env.APP_PORT,
};

const dbConfig = {
  url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  authDB: process.env.DB_AUTHDB,
};

module.exports = {
  appConfig,
  dbConfig,
};
