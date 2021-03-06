import express from 'express';
import {getFormer} from '../controllers/former.js';

const router = express.Router();

router.get('/', getFormer );

 
 export default router;