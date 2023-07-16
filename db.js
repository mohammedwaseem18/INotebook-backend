const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://mohdwaseem2831:8dZ3QKHvFOnf6A6T@cluster0.se4tlsz.mongodb.net/";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = connectToMongo;
