const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  Name: { type: String, required: true, trim: true, min: 5, max: 20 },
  userName: { type: String, required: true, index: true, lowercase: true },
  dateOfBirth: {type: Date, required: true},
  age: {type:Number , required: true},
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  otpToken: { type: String }
});

// Define the model
const Trainer = mongoose.model('Trainer', trainerSchema);

// Export the model correctly
module.exports = Trainer;