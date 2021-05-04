import express from 'express';
import { getFormer,signupformer,getOneFormer,getTrainingFormer,getSearched,getFormers ,deleteFormer} from '../controllers/former.js';
const router = express.Router();
router.get('/', getFormer );
router.post('/signup', signupformer);
router.get('/one', getOneFormer);
router.delete('/delete',deleteFormer);
router.get('/trainings', getTrainingFormer);
router.get('/formers',getFormers);
router.get('/Allformers',getFormers);

router.get('/search', getSearched);
 export default router;