import { Router } from 'express';
import bookRoutes from './routes/bookRoutes';

const router = Router();

router.use('/books', bookRoutes);

export default router;
