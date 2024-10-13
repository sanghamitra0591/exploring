const express = require('express');
const { addBook, getAllBooks, searchBooks } = require('../controllers/bookController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['super_admin']), addBook);
router.get('/', authMiddleware, getAllBooks);
router.get('/search/:query', authMiddleware, searchBooks);

module.exports = router;
