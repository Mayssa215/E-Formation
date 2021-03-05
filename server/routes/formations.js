import express from 'express';

import {creatformation,  updateFormation, deleteFormation, getSearchedFormation } from '../controllers/formation.js';
const router = express.Router();
router.post('/', creatformation);
router.patch('/:id', updateFormation);
router.delete('/:id', deleteFormation);
router.get('/', getSearchedFormation);

export default router ;





