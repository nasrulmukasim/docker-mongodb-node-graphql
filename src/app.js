const mongoose = require('mongoose')
const config = require('./config')

// set up db connection
mongoose.connect(config.db.url,{useNewUrlParser: true})
console.info(`Connecting to db`, mongoose.connection.name, `at`, mongoose.connection.host + `:` + mongoose.connection.port)

// try to connect to db
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.info(`Connected to MongoDB`,config.db.url)
});
