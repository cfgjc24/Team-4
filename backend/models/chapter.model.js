// models/chapter.model.js
import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // name as primary key
    },
    highschool_ids: [{
        type: String,
        ref: "Highschool" // ref to the Highschool collection
    }]
});

const Chapter = mongoose.model("Chapter", chapterSchema);
export default Chapter;
