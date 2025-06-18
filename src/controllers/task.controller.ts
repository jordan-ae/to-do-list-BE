import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import { Task } from '../models/task.model';

export const createTask = async (req: AuthRequest, res: Response) => {
  const { title, description, category, priority, dueDate } = req.body;
  try {
    const task = await Task.create({ 
      title, 
      description, 
      category, 
      priority, 
      dueDate, 
      userId: req.user._id 
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};

export const getTasks = async (req: AuthRequest, res: Response) => {
  const filter: any = { userId: req.user._id };
  if (req.query.favorite === 'true') filter.isFavorite = true;

  try {
    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};

export const updateTask = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!task) return void res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};

export const deleteTask = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: id, userId: req.user._id });
    if (!task) return void res.status(404).json({ message: 'Task not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};

export const toggleFavorite = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ _id: id, userId: req.user._id });
    if (!task) return void res.status(404).json({ message: 'Task not found' });

    task.isFavorite = !task.isFavorite;
    await task.save();
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};
