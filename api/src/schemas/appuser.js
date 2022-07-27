const database = require('../database');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AppUser = new Schema({
  email: ObjectId,
  password: String,
});

module.exports = mongoose.model('AppUser', AppUser);
