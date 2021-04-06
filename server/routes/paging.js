import express from 'express';

import { getTrainings, getnotshowfilter,getrecentTraining} from '../controllers/training.js';
import {getAllFormers,getnotshowformer,getrecentFormer} from '../controllers/former.js';
import { getAllCenters,getnotshowcentre,getrecentCentre,getTrainingcenter } from '../controllers/center.js';
const router = express.Router();
router.get('/page', getTrainings);
router.get('/pageformer', getAllFormers );
router.get('/pagecentre', getAllCenters );
router.get('/pageshow', getnotshowfilter);
router.get('/pageshowformer',getnotshowformer);
router.get('/pageshowcentre',getnotshowcentre);
router.get('/recent',getrecentTraining);
router.get('/recentformer', getrecentFormer);
router.get('/recentcentre',getrecentCentre);
router.get('/trainingcenter', getTrainingcenter);

export default router ;