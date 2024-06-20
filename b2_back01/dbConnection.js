const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rahul:rahul1234@cluster0.oj2p85f.mongodb.net/')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));