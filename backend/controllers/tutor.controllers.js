import mongoose from 'mongoose';
import Tutor from "../models/tutor.model.js";

// Get all tutors
export const getTutors = async (req, res) => {
    try {
        const tutors = await Tutor.find({});
        res.status(200).json({ success: true, data: tutors });
    } catch (error) {
        console.log("Error in fetching tutors: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Create a new tutor
export const createTutor = async (req, res) => {
    const tutor = req.body; // user sends this data

    // Check if all required fields are provided
    if (!tutor.name || !tutor.chapter || !tutor.email || !tutor.race || !tutor.ethnicity || !tutor.availability) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    // Check if email already exists
    const existingTutor = await Tutor.findOne({ email: tutor.email });
    if (existingTutor) {
        return res.status(400).json({ success: false, message: "Tutor with this email already exists" });
    }

    const newTutor = new Tutor(tutor); // create new tutor with info given

    try {
        await newTutor.save();
        res.status(201).json({ success: true, data: newTutor });
    } catch (error) {
        console.error("Error in Create Tutor: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Delete a tutor by ID
export const deleteTutor = async (req, res) => {
    const { id } = req.params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid tutor ID" });
    }

    try {
        await Tutor.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (error) {
        console.error("Error in Delete Tutor: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Update a tutor by ID
export const updateTutor = async (req, res) => {
    const { id } = req.params;
    const tutor = req.body;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid tutor ID" });
    }

    try {
        // Update tutor and return the updated document
        const updatedTutor = await Tutor.findByIdAndUpdate(id, tutor, { new: true });

        if (!updatedTutor) {
            return res.status(404).json({ success: false, message: "Tutor not found" });
        }

        res.status(200).json({ success: true, data: updatedTutor });
    } catch (error) {
        console.error("Error in Update Tutor: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
