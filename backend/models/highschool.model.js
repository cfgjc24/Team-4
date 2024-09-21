// models/highschool.model.js
import mongoose from "mongoose";

const highschoolSchema = new mongoose.Schema({
    hs_id: {
        type: Number,
        required: true,
        unique: true // id as primary key
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

const HighSchool = mongoose.model("HighSchool", highschoolSchema);
export default HighSchool;
