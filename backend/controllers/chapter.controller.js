import mongoose from 'mongoose';
import Chapter from "../models/chapter.model.js";

export const getChapters = async (req, res) => {
    try {
        const chapters = await Chapter.find({});
        res.status(200).json({sucess: true, data: chapters });
    } catch (error) {
        console.log("Error in fetching chapters: ", error.message);
        res.status(500).json({ sucess: false, message: "Server Error"});
    }
};

export const getChapter = async (req, res, chapter_name) => {
    try {
        const chapter = await Chapter.find({name: chapter_name});
        res.status(200).json({sucess: true, data: chapters });
    } catch (error) {
        console.log("Error in fetching chapter: ", error.message);
        res.status(500).json({ sucess: false, message: "Server Error"});
    }
};

export const createChapter = async (req, res) => {
    const {
        name,
        highschool_ids
    } = req.body;

    try {
        // Check if student with this email already exists
        const existingChapter = await Chapter.findOne({ name });

        if (existingChapter) {
            return res.status(400).json({ message: "Chapter with this name already exists!" });
        }

        // Create a new student instance
        const newChapter = new Chapter({
            name,
            highschool_ids
        });

        // Save the student to the database
        await newChapter.save();

        res.status(201).json({ message: "Chapter created successfully!", data: newChapter });
    } catch (error) {
        console.log("Error in creating chapter: ", error.message);
        res.status(500).json({ message: "Server error: " + error.message });
    }
};

export const deleteChapter = async (req, res) => {
    const { name } = req.params;
    if(!mongoose.Types.ObjectId.isValid(name)){
        return res.status(404).json({success: false, message: "Invalid chapter name"});
    }
    try {
        await Chapter.findByIdAndDelete(name);
        res.status(200).json( { success: true, message: "successfully deleted"});
    } catch (error) {
        res.status(500).json( { success: false, message: "Server Error"});
    }
};

export const updateChapter = async (req, res) => {
    const { name } = req.params;
    const chapter = req.body;
    if(!mongoose.Types.ObjectId.isValid(chapter)){
        return res.status(404).json({success: false, message: "Invalid chapter ID"});
    }
    try {
        const updatedChapter = await Chapter.findByIdAndUpdate(email, chapter, {new:true});
        res.status(200).json({sucess:true, data: updatedChapter});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
}