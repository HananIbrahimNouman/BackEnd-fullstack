const express = require("express");
const courseRoute = express.Router();

const { getCourses, postCourse, deleteCourse } = require("../controllers/course");
const {authentication} = require("../middlewares/authentication")

courseRoute.get("/courses",authentication, getCourses);
courseRoute.post("/course",authentication, postCourse);
courseRoute.delete("/course/:id", authentication, deleteCourse);

module.exports = courseRoute;
