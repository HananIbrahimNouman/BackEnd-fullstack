const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Tuwaiq:Tuwaiq@cluster0.zt7uu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
