import { Router } from 'express';
import authController from '@controllers/v1/auth.controller';
import AuthMiddleware from '@middleware/auth.js';

const authRouter = new Router();
authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
authRouter.post('/passwords/email', authController.forgotPassword);
authRouter.post('/passwords/reset', authController.resetPassword);
authRouter.post('/emails/confirm', authController.confirmEmail);
authRouter.post('/emails/resend', AuthMiddleware, authController.resendConfirmEmail);
export default authRouter;
