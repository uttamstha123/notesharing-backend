const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Uttam:test123@cluster0.bwkeu.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connection to MongoDB successful');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
