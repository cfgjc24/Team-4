//checkUserType.js
import Student from "../models/student.model.js";
import Tutor from "../models/tutor.model.js";
import Teacher from "../models/teacher.model.js";
import Admin from "../models/admin.model.js";

export const checkUserType = async (req, res, next) => {
  const { email } = req.body; 

  try {
    // Check if the user is a Student
    const student = await Student.findOne({ email });
    if (student) {
      return res.status(200).json({ userType: "student"});
    }

    // Check if the user is a Tutor
    const tutor = await Tutor.findOne({ email });
    if (tutor) {
      return res.status(200).json({ userType: "tutor"});
    }

    // Check if the user is a Teacher
    const teacher = await Teacher.findOne({ email });
    if (teacher) {
      return res.status(200).json({ userType: "teacher"});
    }

    // Check if the user is an Admin
    const admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(200).json({ userType: "admin" });
    }

    // If no user is found
    res.status(404).json({ message: "User not found"});

  } catch (error) {
    console.error("Error in checking user type: ", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
