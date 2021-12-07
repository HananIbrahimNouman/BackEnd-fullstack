const express = require("express");
const app = express();
require("./db/db");
app.use(express.json());
const cors = require("cors");
app.use(cors());
require('dotenv').config()

///////////////////////////////

const courseRoute = require("./routers/routes/courseRoute");
const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute  = require("./routers/routes/loginRoute")
app.use(courseRoute);
app.use(signUpRoute);
app.use(loginRoute);



////////////////////

app.listen(process.env.PORT || 5000, () => {
  console.log("server run on 5000 port");
});
