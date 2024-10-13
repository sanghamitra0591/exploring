const express = require('express');
const { createRequest, handleRequest, getUserRequests, getUserTakenBooks } = require('../controllers/requestController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

// User can create a book request
router.post('/', authMiddleware, createRequest);

// Admin can handle requests (accept or decline)
router.post('/handle', authMiddleware, handleRequest);

// User can view their requests
router.get('/my-requests', authMiddleware, getUserRequests);

// User can view taken books
router.get('/my-taken-books', authMiddleware, getUserTakenBooks);

module.exports = router;
