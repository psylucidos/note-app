const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');

module.exports = mongoose;
