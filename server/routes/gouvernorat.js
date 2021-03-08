import express from 'express';

import {getgouvernorat} from '../controllers/gouvernorat.js';

const router = express.Router();
router.get('/', getgouvernorat);

export default router ;