const mongoose = require("mongoose");
const mongouri =
  "mongodb+srv://bvrit-portal:AQPZMWO4tQAvMe9L@cluster0.dmnsn.mongodb.net/cloudnote?retryWrites=true&w=majority";
  // "mongodb://localhost:27017"

const connectToMongo = () => {
  mongoose.connect(mongouri, () => {
    console.log("connected to mongo");
  });
};
module.exports = connectToMongo;
