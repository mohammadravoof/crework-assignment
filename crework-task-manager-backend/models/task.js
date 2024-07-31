const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 40
  },
  description: {
    type: String,
    maxlength: 80
  },
  status: {
    type: String,
    required: true,
    enum: ['To do', 'In progress', 'Under review', 'Finished']
  },
  priority: {
    type: String,
    enum: ['Urgent', 'Medium', 'Low']
  },
  deadline: {
    type: Date
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  visitHistory: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

taskSchema.pre('save', function (next) {
  const now = new Date();
  const minutesPassed = Math.floor((now - this.createdAt) / 60000);
  if (minutesPassed < 60) {
    this.visitHistory = `${minutesPassed} minutes ago`;
  } else if (minutesPassed < 1440) {
    this.visitHistory = `${Math.floor(minutesPassed / 60)} hours ago`;
  } else {
    this.visitHistory = `${Math.floor(minutesPassed / 1440)} days ago`;
  }
  next();
});

taskSchema.pre('save', async function (next) {
  const taskCount = await mongoose.models.Task.countDocuments({ userId: this.userId });
  if (taskCount >= 20) {
    const error = new Error('Maximum number of tasks (20) reached.');
    next(error);
  } else {
    next();
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
