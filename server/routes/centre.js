import express from 'express';
import {getCentre,signupcentre,getOneCenter} from '../controllers/centre.js';

const router = express.Router();

router.get('/', getCentre);
router.post('/signup', signupcentre);
router.get('/one', getOneCenter);
 export default router;