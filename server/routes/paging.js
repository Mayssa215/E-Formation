import express from 'express';

import { getTrainings} from '../controllers/training.js';
const router = express.Router();
router.get('/page', getTrainings );
export default router ;
