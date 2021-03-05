import express from 'express';
import {getFormateur} from '../controllers/formateur.js';

const router = express.Router();

router.get('/', getFormateur );
 
 export default router;