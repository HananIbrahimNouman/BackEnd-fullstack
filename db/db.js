const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
