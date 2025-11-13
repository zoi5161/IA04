import express from 'express';
import { userController } from '../controllers/userController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/profile', verifyToken, userController.getProfile);

export default router;