import express from 'express';
import { signup, login } from '../controllers/admin.js';

const router = express.Router();

/* CRETE */
router.post('/signup', signup);
router.post('/login', login);

export default router;
