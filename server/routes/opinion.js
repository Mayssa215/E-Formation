import express from 'express';
import { Opiniontraining } from '../controllers/opinion.js';


const router = express.Router();
router.post('/',Opiniontraining);

export default router ;