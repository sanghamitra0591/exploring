const express = require('express');
const { addAdmin, getAllUsers } = require('../controllers/adminController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

// Super admin can add new admins
router.post('/add-admin', authMiddleware, roleMiddleware(['super_admin']), addAdmin);

// Get all users (admins and regular users)
router.get('/users', authMiddleware, roleMiddleware(['super_admin', 'admin']), getAllUsers);

router.get('/requests', authMiddleware, roleMiddleware(['admin', 'super_admin']), getRequests);

module.exports = router;
