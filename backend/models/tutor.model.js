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
    highschool_id: {
        type: [String],
        required: true,
        ref: "Highschool"
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
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Non-Binary', 'Other']
    },
    pronouns: {
        type: String,
        enum: ['He/Him', 'She/Her', 'They/Them', 'Other']
    },
    availability: {
        type: String,
        required: true
    }
});

const Tutor = mongoose.model("Tutor", tutorSchema);
export default Tutor;
