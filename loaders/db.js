const mongoose = require('mongoose');
const { dbConfig } = require('../config');

const dbAuth = {
  auth: { authSource: dbConfig.authDB },
  user: dbConfig.username,
  pass: dbConfig.password,
};

// set up db connection
mongoose.connect(dbConfig.url, { ...dbAuth, useNewUrlParser: true })
  .catch((e) => console.error(e.message));

// try to connect to db
const db = mongoose.connection;
db.once('open', () => {
  console.info('Connected to MongoDB', mongoose.connection.name, 'at', `${mongoose.connection.host}:${mongoose.connection.port}`);
});

module.exports = {
  db,
};
