import mongoose from "mongoose";

const chapterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    high_schools: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HighSchool'
    }]
})