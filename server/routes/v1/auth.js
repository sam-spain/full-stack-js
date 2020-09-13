import { Router } from 'express';
import authController from '@controllers/v1/auth.controller';

const authRouter = new Router();
authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
authRouter.post('/passwords/email', authController.forgotPassword);
export default authRouter;
