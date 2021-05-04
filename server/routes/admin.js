import express from 'express';
import {signin,updateAdmin } from '../controllers/admin.js';
const router = express.Router();
router.post('/signin', signin);
router.patch('/:id', updateAdmin);

export default router;