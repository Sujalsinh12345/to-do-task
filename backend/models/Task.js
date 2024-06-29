const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  priority: { type: String, enum: ['low', 'medium', 'high'] },
  status: { type: String, enum: ['incomplete', 'completed'], default: 'incomplete' },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [{ text: String, createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, createdAt: { type: Date, default: Date.now } }],
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
