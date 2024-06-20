const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controller/dashboardController');

// Route to get all users
router.get('/users', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
