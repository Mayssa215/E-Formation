import express from 'express';
import { getFormer,signupformer,getOneFormer } from '../controllers/former.js';

const router = express.Router();

router.get('/', getFormer );
router.post('/signup', signupformer);
router.get('/one', getOneFormer);
 export default router;