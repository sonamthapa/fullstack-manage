import { Router } from 'express';
import { getDashboardMetrics } from '../controllers/dashboardContoller';

const router = Router();
router.get('/', getDashboardMetrics);

export default router;
