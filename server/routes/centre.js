import express from 'express';
import {getCentre} from '../controllers/centre.js';

const router = express.Router();

router.get('/', getCentre);
 
 export default router;