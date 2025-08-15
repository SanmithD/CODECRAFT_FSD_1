import express from 'express';
import { login, logout, profile, signup } from '../controllers/user.controller.js';
import { isAuthorized, loginMiddleware, signupMiddleware } from '../middlewares/user.middleware.js';

const router = express.Router();

router.post('/signup', signupMiddleware, signup);
router.post('/login', loginMiddleware, login);
router.post('/logout', logout);
router.get('/profile', isAuthorized, profile);

export default router;