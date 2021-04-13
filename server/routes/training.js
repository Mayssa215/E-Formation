import express from 'express';

import {creatTraining,  updateTraining, deleteTraining, getSearchedTraining ,getOneTraining, creatTrainingcenter,getAllTrainings, getTrainingbyid} from '../controllers/training.js';
const router = express.Router();
router.post('/', creatTraining);
router.post('/center', creatTrainingcenter);
router.get('/all', getAllTrainings);
router.patch('/update', updateTraining);
router.delete('/delete', deleteTraining);
router.get('/',getSearchedTraining);
router.get('/one',getOneTraining);
router.get('/trainingbyid',getTrainingbyid);
export default router ;
