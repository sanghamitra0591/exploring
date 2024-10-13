const Book = require('../models/Book');

const addBook = async (req, res) => {
  const { title, author, category, quantity } = req.body;
  const book = new Book({ title, author, category, quantity });
  await book.save();
  res.status(201).json(book);
};

const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

const searchBooks = async (req, res) => {
  const { query } = req.params;
  const books = await Book.find({ title: new RegExp(query, 'i') });
  res.json(books);
};

module.exports = { addBook, getAllBooks, searchBooks };
