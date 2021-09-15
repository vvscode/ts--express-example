import express from 'express';
import Book from '../models/books.model';


const booksRouter = express.Router();

booksRouter.get("/", (req, res) =>  {
  Book.find({}).then((response) => {console.log(response); res.end(); }); 

});

booksRouter.post("/", (req, res) =>  {
  const book = new Book({
    author: req.body.author,
    title: req.body.title,
    year: req.body.year
  });

  book.save().then((response) => res.send(response));
});

export default booksRouter;
