const mongoose = require("mongoose");
const MoongoPath = process.env.MONGO_URL;

module.exports = async () => {
  await mongoose.connect(MoongoPath);

  return mongoose;
};
