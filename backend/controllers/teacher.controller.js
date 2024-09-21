import mongoose from 'mongoose';
import Student from "../models/teacher.model.js";

export const getTeachers = async (req, res) => {
    try {
        const teachers = await Student.find({});
        res.status(200).json({sucess: true, data: students });
    } catch (error) {
        console.log("Error in fetching teachers: ", error.message);
        res.status(500).json({ sucess: false, message: "Server Error"});
    }
};

export const getTeachersBySchool = async (req, res, school_id) => {
    try {
        const teachers = await Student.find({highschool_id: school_id});
        res.status(200).json({sucess: true, data: students });
    } catch (error) {
        console.log("Error in fetching teachers: ", error.message);
        res.status(500).json({ sucess: false, message: "Server Error"});
    }
};

export const createTeacher = async (req, res) => {

    const teacher = req.body; // user sends this data
    if (!teacher.name || !teacher.email || !teacher.password) {
        return res.status(400).json({success:false, message: "Please provide all fields"})
    }

    const newTeachers = new Teacher(teacher) // create new student with info given

    try {
        await newTeacher.save();
        res.status(201).json({sucess: true, data: newStudent});
    } catch (error) {
        console.error("Error in Create Student: ", error.message);
        res.status(500).json({ sucess: false, message: "Server Error"});
    }
};

export const deleteTeacher = async (req, res) => {
    const { email } = req.params;
    if(!mongoose.Types.ObjectId.isValid(email)){
        return res.status(404).json({success: false, message: "Invalid teacher ID"});
    }
    try {
        await Teacher.findByEmailAndDelete(email);
        res.status(200).json( { success: true, message: "successfully deleted"});
    } catch (error) {
        res.status(500).json( { success: false, message: "Server Error"});
    }
};

export const updateTeacher = async (req, res) => {
    const { id } = req.params;
    const student = req.body;
    if(!mongoose.Types.ObjectId.isValid(teacher)){
        return res.status(404).json({success: false, message: "Invalid teacher ID"});
    }
    try {
        const updatedTeacher = await Teacher.findByEmailAndUpdate(email, teacher, {new:true});
        res.status(200).json({sucess:true, data: updatedTeacher});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
}