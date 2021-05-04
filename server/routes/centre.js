import express from 'express';
import {getCentre,signupcentre,getOneCenter,getTrainingcenter,getCenters,deleteCenter,getSearched} from '../controllers/center.js';

const router = express.Router();
router.get('/', getCentre);
router.post('/signup', signupcentre);
router.get('/one', getOneCenter);
router.get('/training',getTrainingcenter);
router.get('/centers',getCenters)
router.delete('/delete',deleteCenter);
router.get('/search',getSearched);

 export default router;