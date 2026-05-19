import express from 'express';
import { authController } from './auth.controller';
import { auth } from '../../middleWares/auth';
import { UserRole } from '../../../../prisma/generated/prisma';
const router = express.Router();

router.post('/login', authController.loginUser);
router.post('/refreshToken',auth(UserRole.SUPER_ADMIN,UserRole.ADMIN), authController.refreshToken);
router.post('/change-password',auth(UserRole.SUPER_ADMIN,UserRole.ADMIN,UserRole.MANAGER,UserRole.BUYER), authController.changePassword);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

export const authRoutes = router;

