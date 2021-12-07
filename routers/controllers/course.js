const courseModel= require("../../db/models/courseModel")


const getCourses = async (req,res)=>{
    try {
         const courses = await courseModel.find({}).populate("user");
        res.status(200).json(courses)
    } catch (error){
        res.send(error)
    }
}

const postCourse= async (req, res)=>{
    const { newName, newDescription, newImg } = req.body;
    const user = req.token.userId;
    const newCourse = new courseModel({
      name: newName,
      description: newDescription,
      img: newImg,
      user,
    });
    try {
        const savedCourse = await newCourse.save()
         const courses = await courseModel.find({});
        res.status(200).json(courses)

    }catch (error){
        res.send(error)
    }
}

const deleteCourse = async (req, res) => {
  const id = req.params.id;
  const userId = req.token.userId;
  try {
    const course = await courseModel.findOneAndDelete({ _id: id, user: userId })
      res.send(course);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { getCourses, postCourse, deleteCourse };