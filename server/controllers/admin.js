import Admin from '../models/Admin.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import jwt from 'jsonwebtoken';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* CREATE */
export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, image } = req.body;
    let imageUrl = '';

    if (image) {
      const result = await cloudinary.uploader.upload(image, {
        width: 500,
        height: 500,
        crop: 'fill',
      });
      imageUrl = result.secure_url;
    } else {
      imageUrl = '';
    }
    const isFound = await Admin.findOne({ email });

    if (isFound) {
      res.status(400).json({ message: 'user already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
      name: `${firstName} ${lastName}`,
      email: email.toLowerCase(),
      password: hashedPassword,
      image: imageUrl,
    });

    const token = jwt.sign(
      { email: admin.email, id: admin._id },
      process.env.JWT_SECRET_KEY,
    );

    res.json({ admin, token });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundAdmin = await Admin.findOne({ email });
    if (!foundAdmin) {
      res.status(400).json({ message: 'Admin not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundAdmin.password,
    );

    if (!isPasswordCorrect) {
      res.status(400).json({ message: 'invalid username or password' });
    }

    const token = jwt.sign(
      { email: foundAdmin.email, id: foundAdmin._id },
      process.env.JWT_SECRET_KEY,
    );

    res.status(200).json({ admin: foundAdmin, token });
  } catch (error) {
    res.json({ message: error.message });
  }
};
