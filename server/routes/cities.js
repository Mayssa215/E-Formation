import express from 'express';

import {getCity} from '../controllers/cities.js';

const router = express.Router();
router.get('/', getCity);

export default router ;