import express from 'express';
import { getFormer,signupformer,getOneFormer,getTrainingFormer } from '../controllers/former.js';
const router = express.Router();
router.get('/', getFormer );
router.post('/signup', signupformer);
router.get('/one', getOneFormer);
router.get('/trainings', getTrainingFormer);

 export default router;