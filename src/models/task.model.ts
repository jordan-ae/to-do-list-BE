import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: String,
  description: String,
  category: { type: String, default: 'General' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'Medium' },
  dueDate: { type: Date },
  isFavorite: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export const Task = mongoose.model('Task', TaskSchema);
