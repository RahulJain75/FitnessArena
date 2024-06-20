const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true, min: 5, max: 20 },
  lastName: { type: String, required: true },
  userName: { type: String, required: true, index: true, lowercase: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  otpToken: { type: String }
});

// Define the model
const User = mongoose.model('User', userSchema);

// Export the model correctly
module.exports = User;