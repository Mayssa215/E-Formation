import express from 'express';
import {signup, signin,forgetpassword,resetpassword,updateUser,deleteUser,getClients,getSearch} from '../controllers/user.js';
const router = express.Router();
router.post('/signup', signup);
router.post('/signin', signin);
router.put ('/forgetpassword', forgetpassword)
router.put ('/resetpassword', resetpassword)
router.patch('/:id', updateUser);

router.delete('/delete',deleteUser);

router.get('/clients',getClients);
router.get('/search',getSearch);

export default router;