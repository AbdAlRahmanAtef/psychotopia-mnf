import express from 'express';
import {
  createPost,
  getPosts,
  getPostById,
  searchPost,
} from '../controllers/posts.js';

const router = express.Router();

/* CRETE */
router.post('/create', createPost);

/* READ */
router.get('/', getPosts);
router.get('/search', searchPost);
router.get('/:id', getPostById);

/* UPDATE */
/* DELETE */

export default router;
