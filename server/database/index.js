const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = Promise;
mongoose.set('debug', true);
mongoose.connect(config.database, {autoIndex: false})
  .then((result) => {
    console.log('DB connected');
  })
  .catch(error => {
    console.log('ERROR:', { ...error });
  });

