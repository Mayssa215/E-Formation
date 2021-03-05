import express from 'express';

import { getFormations} from '../controllers/formation.js';
const router = express.Router();
router.get('/page', getFormations );
export default router ;
