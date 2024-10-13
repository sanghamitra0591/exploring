const Request = require('../models/Request');
const Book = require('../models/Book');

const createRequest = async (req, res) => {
  const { bookId } = req.body;
  const book = await Book.findById(bookId);

  if (!book || book.quantity < 1) {
    return res.status(400).json({ message: 'Book not available' });
  }

  const request = new Request({
    userId: req.user._id,
    bookId,
  });

  await request.save();
  book.quantity -= 1;
  await book.save();

  res.status(201).json(request);
};

const handleRequest = async (req, res) => {
  const { requestId, status } = req.body;
  const request = await Request.findById(requestId).populate('bookId');

  if (status === 'accepted') {
    request.status = status;
    request.returnDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);
    await request.save();

    request.bookId.quantity -= 1;
    await request.bookId.save();
  } else if (status === 'declined') {
    request.status = status;
    await request.save();
  }


  res.json(request);
};

const getRequests = async (req, res) => {
  const requests = await Request.find().populate('userId bookId');
  res.json(requests);
};

const Request = require('../models/Request');
const Book = require('../models/Book');

// Function to view all requests by a user
const getUserRequests = async (req, res) => {
  const userRequests = await Request.find({ userId: req.user._id }).populate('bookId');
  res.json(userRequests);
};

// Function to view taken books
const getUserTakenBooks = async (req, res) => {
  const takenBooks = await Request.find({ userId: req.user._id, status: 'accepted' }).populate('bookId');
  res.json(takenBooks);
};

module.exports = { createRequest, handleRequest, getUserRequests, getUserTakenBooks };



module.exports = { createRequest, handleRequest, getRequests };
