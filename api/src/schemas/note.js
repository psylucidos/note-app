const database = require('../database');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Note = new Schema({
  author: ObjectId,
  title: String,
  content: String
});

module.exports = mongoose.model('Note', Note);
