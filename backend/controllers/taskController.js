const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, dueDate, priority, assignee } = req.body;

  try {
    const task = await Task.create({ title, description, dueDate, priority, assignee });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignee');
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate, priority, status, assignee } = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, { title, description, dueDate, priority, status, assignee }, { new: true });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
