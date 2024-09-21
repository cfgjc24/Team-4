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
    const {
        name,
        password,
        chapter,
        highschool_id,
        email,
        race,
        ethnicity,
        gender,
        pronouns,
        availability
    } = req.body;

    try {
        // Check if tutor with this email already exists
        const existingTutor = await Tutor.findOne({ email });

        if (existingTutor) {
            return res.status(400).json({ message: "Tutor with this email already exists!" });
        }

        // Create a new student instance
        const newTutor = new Tutor({
            name,
            password,
            chapter,
            highschool_id,
            email,
            race,
            ethnicity,
            gender,
            pronouns,
            availability
        });

        // Save the student to the database
        await newTutor.save();

        res.status(201).json({ message: "Tutor created successfully!", data: newTutor });
    } catch (error) {
        console.log("Error in creating tutor: ", error.message);
        res.status(500).json({ message: "Server error: " + error.message });
    }
};

// Delete a tutor by ID
export const deleteTutor = async (req, res) => {
    const { email } = req.params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(email)) {
        return res.status(404).json({ success: false, message: "Invalid tutor email" });
    }

    try {
        await Tutor.findByIdAndDelete(email);
        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (error) {
        console.error("Error in Delete Tutor: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Update a tutor by ID
export const updateTutor = async (req, res) => {
    const { email } = req.params;
    const tutor = req.body;

    // Validate the email
    if (!mongoose.Types.ObjectId.isValid(email)) {
        return res.status(404).json({ success: false, message: "Invalid tutor email" });
    }

    try {
        // Update tutor and return the updated document
        const updatedTutor = await Tutor.findByIdAndUpdate(email, tutor, { new: true });

        if (!updatedTutor) {
            return res.status(404).json({ success: false, message: "Tutor not found" });
        }

        res.status(200).json({ success: true, data: updatedTutor });
    } catch (error) {
        console.error("Error in Update Tutor: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
