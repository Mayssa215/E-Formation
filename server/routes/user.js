import express from 'express';
import {signup, signin,forgetpassword,resetpassword,updateUser } from '../controllers/user.js';
const router = express.Router();
router.post('/signup', signup);
router.post('/signin', signin);
router.put ('/forgetpassword', forgetpassword)
router.put ('/resetpassword', resetpassword)
router.patch('/:id', updateUser);

export default router;