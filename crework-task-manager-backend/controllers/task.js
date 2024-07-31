const Task = require('../models/task'); // Adjust the path as needed

// Controller to handle task creation
const handleCreateTask = async (req, res) => {
  try {
    const body = req.body;

    if(
        !body.title || !body.status
    ) {
        return res.status(400).json({ msg: "Title and Status are required..."})
    }

    const result = await Task.create({
        title: body.title,
        description: body.description,
        status: body.status,
        priority: body.priority,
        deadline: body.deadline,
        userId: req.userId,
    })

    
    res.status(201).json({ message: "task created", id: result._id })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to handle task update
const handleUpdateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority, deadline } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, status, priority, deadline },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to handle task deletion
const handleDeleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to handle getting tasks by userId
const handleGetTasksByUserId = async (req, res) => {
    try {
      const userId = req.userId; // Get userId from authenticated user
  
      const tasks = await Task.find({ userId });
  
      res.status(200).json(tasks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
  handleCreateTask,
  handleUpdateTask,
  handleDeleteTask,
  handleGetTasksByUserId
};
