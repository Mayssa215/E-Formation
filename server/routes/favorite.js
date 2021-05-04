import express from 'express';
import {Favoritetraining,Getfavoritebyid,Deletefavoritetraining, Getfavoritetrainings,getFavorite} from '../controllers/favorite.js';
const router = express.Router();
router.post ('/', Favoritetraining)
router.get ('/getfavorite',Getfavoritebyid)
router.delete('/delete',Deletefavoritetraining)
router.get('/favoritetrainings',Getfavoritetrainings);
router.get('/', getFavorite);

export default router ;