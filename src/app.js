const mongoose = require('mongoose')
import config from './config'
// configure environment variables
dotenv.config()

// set up db connection
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,{useNewUrlParser: true})

// try to connect to db
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Connected to MongoDB`)
});
