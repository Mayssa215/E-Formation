import express from 'express';

import {getcategorie,categorie,updateCategorie,getSearchCategorie,getCategories} from '../controllers/categorie.js';

const router = express.Router();
router.get('/', getcategorie);
router.post('/',categorie);
router.patch('/', updateCategorie);
router.get('/search',getSearchCategorie);
router.get('/categories', getCategories);
export default router ;