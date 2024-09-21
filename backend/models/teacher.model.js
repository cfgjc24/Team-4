// models/teacher.model.js
import mongoose from "mongoose";
//import bcrypt from "bcrypt";


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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "HighSchool" // Reference to the HighSchool collection
    },
    students: {
        type: [String], // List of student names
        required: true
    }
});

/**
 * teacherSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

teacherSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

 */

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
