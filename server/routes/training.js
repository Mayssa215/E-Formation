import express from 'express';

import {creatTraining,  updateTraining, deleteTraining, getSearchedTraining } from '../controllers/training.js';
const router = express.Router();
router.post('/', creatTraining);
router.patch('/:id', updateTraining);
router.delete('/:id', deleteTraining);
router.get('/', getSearchedTraining);

export default router ;





