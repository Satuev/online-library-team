const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
  name: String,
  genre: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Genre'
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  isArend: {
    type: Boolean,
    default: false
  }

})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book
