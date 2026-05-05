const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  author: { type: String },
  genre: { type: String },
  price: { type: Number, min: 0, max: 9999 },
  stock: { type: Number, default: 0 },
  publishedYear: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Book", bookSchema);
