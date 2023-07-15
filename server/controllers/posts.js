import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import Post from '../models/Post.js';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* CRETE */
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
    res.json({ message: error.message });
  }
};

/* READ */
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const searchPost = async (req, res) => {
  try {
    const { query } = req.query;
    console.log(query);
    const posts = await Post.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
      ],
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error });
  }
};
