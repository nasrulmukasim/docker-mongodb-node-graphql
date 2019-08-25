const mongoose = require('mongoose');
const config = require('../config');

const dbAuth = {
  'auth': { 'authSource': config.db.authDB },
  'user': config.db.username,
  'pass': config.db.password,
}

// set up db connection
mongoose.connect(config.db.url, {...dbAuth, useNewUrlParser: true }).
  catch(e => console.error(e.message));

// try to connect to db
const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.info('Connected to MongoDB', mongoose.connection.name, 'at', `${mongoose.connection.host}:${mongoose.connection.port}`);
});

module.exports = { db };
