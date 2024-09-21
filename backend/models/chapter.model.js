// models/chapter.model.js
import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // name as primary key
    },
    highschool_ids: [{
        type: [int],
        ref: "HighSchool" // ref to the HighSchool collection
    }]
});

const Chapter = mongoose.model("Chapter", chapterSchema);
export default Chapter;
