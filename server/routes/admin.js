import express from 'express';
import {
  signup,
  login,
  getAdmins,
  deleteAdmin,
  getAdminsById,
} from '../controllers/admin.js';

const router = express.Router();

/* CRETE */
router.post('/add-admin', signup);
router.post('/login', login);

/* READ */
router.get('/', getAdmins);
router.get('/:id', getAdminsById);

/* DELETE */
router.delete('/:id', deleteAdmin);

export default router;
