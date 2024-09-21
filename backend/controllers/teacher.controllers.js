import mongoose from 'mongoose';
import Teacher from "../models/teacher.model.js";

export const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({});
        res.status(200).json({sucess: true, data: teachers });
    } catch (error) {
        console.log("Error in fetching teachers: ", error.message);
        res.status(500).json({ sucess: false, message: "Server Error"});
    }
};

export const getTeachersBySchool = async (req, res, school_id) => {
    try {
        const teachers = await Teacher.find({highschool_id: school_id});
        res.status(200).json({sucess: true, data: teachers });
    } catch (error) {
        console.log("Error in fetching teachers: ", error.message);
        res.status(500).json({ sucess: false, message: "Server Error"});
    }
};

export const createTeacher = async (req, res) => {
    const {
        name,
        password,
        email,
        highschool_id,
        students,
    } = req.body;

    try {
        // Check if student with this email already exists
        const existingTeacher = await Teacher.findOne({ email });

        if (existingTeacher) {
            return res.status(400).json({ message: "Teacher with this email already exists!" });
        }

        // Create a new student instance
        const newTeacher = new Teacher({
            name,
            password,
            email,
            highschool_id,
            students
        });

        // Save the student to the database
        await newTeacher.save();

        res.status(201).json({ message: "Teacher created successfully!", data: newTeacher });
    } catch (error) {
        console.log("Error in creating teacher: ", error.message);
        res.status(500).json({ message: "Server error: " + error.message });
    }
};

export const deleteTeacher = async (req, res) => {
    const { email } = req.params;
    if(!mongoose.Types.ObjectId.isValid(email)){
        return res.status(404).json({success: false, message: "Invalid teacher email"});
    }
    try {
        await Teacher.findByIdAndDelete(email);
        res.status(200).json( { success: true, message: "successfully deleted"});
    } catch (error) {
        res.status(500).json( { success: false, message: "Server Error"});
    }
};

export const updateTeacher = async (req, res) => {
    const { id } = req.params;
    const teacher = req.body;
    if(!mongoose.Types.ObjectId.isValid(teacher)){
        return res.status(404).json({success: false, message: "Invalid teacher ID"});
    }
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(email, teacher, {new:true});
        res.status(200).json({sucess:true, data: updatedTeacher});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
}