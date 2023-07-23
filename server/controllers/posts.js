import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import Post from '../models/Post.js';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { title, category, image, description, tags } = req.body;

    const result = await cloudinary.uploader.upload(image, {
      width: 500,
      height: 500,
      crop: 'fill',
    });
    const imageUrl = result.secure_url;

    const post = await Post.create({
      title,
      category,
      image: imageUrl,
      description,
      tags: tags.split(','),
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* READ */
export const getPosts = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const posts = await Post.find(filter).sort({ _id: -1 });
    const allCategories = await Post.distinct('category');

    res.status(200).json({ posts, allCategories });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchPost = async (req, res) => {
  try {
    const { query } = req.query;

    const posts = await Post.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
      ],
    });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostsByTags = async (req, res) => {
  try {
    const { tags } = req.query;

    const posts = await Post.find({
      tags: { $regex: tags, $options: 'i' },
    });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* UPDATE */
export const updatePost = async (req, res) => {
  try {
    const { _id, title, category, description, tags, image } = req.body;

    let newImage = '';

    if (image.includes('http')) {
      newImage = image;
    } else {
      const result = await cloudinary.uploader.upload(image, {
        width: 500,
        height: 500,
        crop: 'fill',
      });
      newImage = result?.secure_url;

      const post = await Post.findById(_id);
      if (post.image !== newImage) {
        const publicId = post.image.match(/\/v\d+\/([^/]+)\./)[1];
        await cloudinary.uploader.destroy(publicId);
      }
    }

    const updatedPost = await Post.findByIdAndUpdate(
      _id,
      {
        title,
        category,
        description,
        tags: tags.split(','),
        image: newImage,
      },
      { new: true },
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* DELETE */
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    const publicId = post.image.match(/\/v\d+\/([^/]+)\./)[1];
    await cloudinary.uploader.destroy(publicId);

    await Post.findByIdAndRemove(id);

    res.json('Post deleted successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
