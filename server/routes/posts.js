import express from 'express';
import {
  createPost,
  getPosts,
  getPostById,
  searchPost,
  updatePost,
  deletePost,
  getPostsByTags,
} from '../controllers/posts.js';

const router = express.Router();

/* CRETE */
router.post('/create', createPost);

/* READ */
router.get('/', getPosts);
router.get('/search', searchPost);
router.get('/tags', getPostsByTags);
router.get('/:id', getPostById);

/* UPDATE */
router.patch('/update', updatePost);

/* DELETE */
router.delete('/:id', deletePost);

export default router;
