// models/highschool.model.js
import mongoose from "mongoose";

const highschoolSchema = new mongoose.Schema({
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
}, {
    timestamps: true 
});

// unique index on the combination of name, city, and state
highschoolSchema.index({ name: 1, city: 1, state: 1 }, { unique: true });

const Highschool = mongoose.model("Highschool", highschoolSchema);
export default Highschool;
