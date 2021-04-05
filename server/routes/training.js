import express from 'express';

import {creatTraining,  updateTraining, deleteTraining, getSearchedTraining ,getOneTraining} from '../controllers/training.js';
const router = express.Router();
router.post('/', creatTraining);
router.patch('/:id', updateTraining);
router.delete('/:id', deleteTraining);
router.get('/',getSearchedTraining);
router.get('/one',getOneTraining);
export default router ;

