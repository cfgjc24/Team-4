// models/tutor.model.js
import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        required: true
    },
    highschool_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "HighSchool"
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    race: {
        type: String,
        enum: ['Asian', 'Black', 'Hispanic', 'White', 'Other'],
        required: true
    },
    ethnicity: {
        type: String,
        enum: ['Non-Hispanic', 'Hispanic', 'Unknown'],
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
    availability: [{
        start: {
          type: Date, 
          required: true
        },
        end: {
          type: Date,
          required: true
        }
      }]
});

const Tutor = mongoose.model("Tutor", tutorSchema);
export default Tutor;
