const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  adminName: { type: String, required: true, index: true, lowercase: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Define the model
const Admin = mongoose.model('Admin', adminSchema);

// Export the model correctly
module.exports = Admin;