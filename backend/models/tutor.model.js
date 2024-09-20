// models/tutor.model.js
import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // email as primary key
    },
    race: {
        type: String,
        required: true
    },
    ethnicity: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    }
});

const Tutor = mongoose.model("Tutor", tutorSchema);
export default Tutor;
