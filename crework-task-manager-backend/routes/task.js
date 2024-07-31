const express = require('express');
const router = express.Router();
const { handleCreateTask, handleUpdateTask, handleDeleteTask, handleGetTasksByUserId } = require('../controllers/task.js');
const { restrictToLoggedinUserOnly } = require('../middlewares/auth.js');

// Route to get tasks by userId
router.get('/task/:userId', restrictToLoggedinUserOnly, handleGetTasksByUserId);

// Other task routes
router.post('/task',restrictToLoggedinUserOnly, handleCreateTask);
router.put('/task/:id', restrictToLoggedinUserOnly, handleUpdateTask);
router.delete('/task/:id', restrictToLoggedinUserOnly, handleDeleteTask);

module.exports = router;
