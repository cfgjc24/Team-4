// models/teacher.model.js
import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // email as primary key
    },
    highschool_id: {
        type: [int],
        required: true,
        ref: "HighSchool" // Reference to the HighSchool collection
    },
    students: {
        type: [String], // List of student names
        required: true
    }
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
