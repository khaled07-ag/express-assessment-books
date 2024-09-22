const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
  title: {type: String},
  author: {type: String},
  price: {type: Number},
  image: {type: String},
});

module.exports = model('Book', PostSchema);