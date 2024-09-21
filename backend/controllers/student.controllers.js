import mongoose from 'mongoose';
import Student from "../models/student.model.js";

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json({sucess: true, data: students });
    } catch (error) {
        console.log("Error in fetching students: ", error.message);
        res.status(500).json({ sucess: false, message: "Server Error"});
    }
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
export const createStudent = async (req, res) => {

    const student = req.body; // user sends this data
    if (!student.name || !student.price || !student.image) {
        return res.status(400).json({success:false, message: "Please provide all fields"})
    }

    const newStudent = new Student(student) // create new student with info given

    try {
        await newStudent.save();
        res.status(201).json({sucess: true, data: newStudent});
    } catch (error) {
        console.error("Error in Create Student: ", error.message);
        res.status(500).json({ sucess: false, message: "Server Error"});
=======
>>>>>>> 14e049da0ba1c30e9ad0f7cca824a2d0e3157372
export const getStudent = async (req, res) => {
    const { email } = req.params; 
    try {
        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, data: student });
    } catch (error) {
        console.log("Error in fetching student: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createStudent = async (req, res) => {
    const {
        email,
        password,
        first_name,
        last_name,
        start_week,
        graduated,
        race,
        ethnicity,
        gender,
        pronouns,
        town,
        state,
        high_school,
        teacher_email,
        date_of_birth,
        phone_number,
        active,
        complete,
        w1_through_w8_attendance,
        capstone
    } = req.body;

    try {
        // Check if student with this email already exists
        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(400).json({ message: "Student with this email already exists!" });
        }

        // Create a new student instance
        const newStudent = new Student({
            email,
            password,
            first_name,
            last_name,
            start_week,
            graduated,
            race,
            ethnicity,
            gender,
            pronouns,
            town,
            state,
            high_school,
            teacher_email,
            date_of_birth,
            phone_number,
            active,
            complete,
            w1_through_w8_attendance,
            capstone
        });

        // Save the student to the database
        await newStudent.save();

        res.status(201).json({ message: "Student created successfully!", data: newStudent });
    } catch (error) {
        console.log("Error in creating student: ", error.message);
        res.status(500).json({ message: "Server error: " + error.message });
<<<<<<< HEAD
=======
>>>>>>> 846f8410ccf882b5c439cb8a4108f86aa460c010
>>>>>>> 14e049da0ba1c30e9ad0f7cca824a2d0e3157372
    }
};

export const deleteStudent = async (req, res) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid student ID"});
    }
    try {
        await Student.findByIdAndDelete(id);
=======
>>>>>>> 14e049da0ba1c30e9ad0f7cca824a2d0e3157372
    const { email } = req.params;
    if(!mongoose.Types.ObjectId.isValid(email)){
        return res.status(404).json({success: false, message: "Invalid student email"});
    }
    try {
        await Student.findByIdAndDelete(email);
<<<<<<< HEAD
=======
>>>>>>> 846f8410ccf882b5c439cb8a4108f86aa460c010
>>>>>>> 14e049da0ba1c30e9ad0f7cca824a2d0e3157372
        res.status(200).json( { success: true, message: "successfully deleted"});
    } catch (error) {
        res.status(500).json( { success: false, message: "Server Error"});
    }
};

export const updateStudent = async (req, res) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const { id } = req.params;
    const student = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid student ID"});
    }
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, student, {new:true});
=======
>>>>>>> 14e049da0ba1c30e9ad0f7cca824a2d0e3157372
    const { email } = req.params;
    const student = req.body;
    if(!mongoose.Types.ObjectId.isValid(email)){
        return res.status(404).json({success: false, message: "Invalid student email"});
    }
    try {
        const updatedStudent = await Student.findByIdAndUpdate(email, student, {new:true});
<<<<<<< HEAD
=======
>>>>>>> 846f8410ccf882b5c439cb8a4108f86aa460c010
>>>>>>> 14e049da0ba1c30e9ad0f7cca824a2d0e3157372
        res.status(200).json({sucess:true, data: updatedStudent});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
}