// models/highschool.model.js
import mongoose from "mongoose";


const classScheduleSchema = new mongoose.Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
});

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
    },
    classSchedule: [classScheduleSchema]
});

const HighSchool = mongoose.model("HighSchool", highschoolSchema);
export default HighSchool;
