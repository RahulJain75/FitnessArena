const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  Name: { type: String, required: true, trim: true, min: 5, max: 20 },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true }
 
});

// Define the model
const Contact = mongoose.model('Contact', contactSchema);

// Export the model correctly
module.exports = Contact;