import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  author: { type: String, required: true },
  year: { type: Number, required: true },
  title: { type: String, require: true },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;