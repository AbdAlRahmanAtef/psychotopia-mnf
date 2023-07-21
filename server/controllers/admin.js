import Admin from '../models/Admin.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

/* CREATE */
export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const isFound = await Admin.findOne({ email });

    if (isFound) {
      res.status(400).json({ message: 'user already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role,
    });

    const token = jwt.sign(
      { email: admin.email, id: admin._id },
      process.env.JWT_SECRET_KEY,
    );

    res.json({
      admin: {
        name: admin.name,
        email: admin.email,
        role: admin.role,
        _id: admin._id,
      },
      token,
    });
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

/* READ */
export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().sort({ id: -1 });

    res.json(admins);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAdminsById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);

    res.json(admin ? true : false);
  } catch (error) {
    res.json({ message: error.message });
  }
};

/* DELETE */

export const deleteAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndRemove(id);

    const admins = await Admin.find();

    res.json(admins);
  } catch (error) {
    res.json({ message: error.message });
  }
};
