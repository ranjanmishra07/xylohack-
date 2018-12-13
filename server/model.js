const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://fyletest:fyletest@ds251799.mlab.com:51799/fyle');
const ImageSchema = new mongoose.Schema({
  public_id: String,
  version: Number,
  format: Number,
  type: String,
  width: Number,
  height: Number,
  secure_url: String,
  created_at: String
});
let ImageInfo = mongoose.model('ImageInfo',ImageSchema)
module.exports = { ImageInfo }