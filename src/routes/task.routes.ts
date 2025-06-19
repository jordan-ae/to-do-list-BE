import { Router } from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  toggleFavorite,
  toggleComplete,
} from '../controllers/task.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

router.use(protect);

router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/favorite', toggleFavorite);
router.patch('/:id/complete', toggleComplete);

export default router;