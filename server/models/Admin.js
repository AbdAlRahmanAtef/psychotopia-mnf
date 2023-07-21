import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: String,
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
