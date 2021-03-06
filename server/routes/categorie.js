import express from 'express';

import {getcategorie} from '../controllers/categorie.js';

const router = express.Router();
router.get('/', getcategorie);

export default router ;
