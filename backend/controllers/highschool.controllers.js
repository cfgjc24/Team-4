import mongoose from 'mongoose';
import HighSchool from "../models/highschool.model.js";

// Get all highschools
export const getHighSchools = async (req, res) => {
    try {
        const highschools = await HighSchool.find({});
        res.status(200).json({ success: true, data: highschools });
    } catch (error) {
        console.log("Error in fetching highschools: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Create a new highschool
export const createHighSchool = async (req, res) => {
    const {
        hs_id,
        name,
        city,
        state,
        classSchedule
    } = req.body;

    try {
        // Check if highschool with this email already exists
        const existingHighSchool = await HighSchool.findOne({ hs_id });

        if (existingHighSchool) {
            return res.status(400).json({ message: "HighSchool with this ID already exists!" });
        }

        // Create a new school instance
        const newHighSchool = new HighSchool({
            hs_id,
            name,
            city,
            state,
            classSchedule
        });

        // Save the student to the database
        await newHighSchool.save();

        res.status(201).json({ message: "HighSchool created successfully!", data: newHighSchool });
    } catch (error) {
        console.log("Error in creating highschool: ", error.message);
        res.status(500).json({ message: "Server error: " + error.message });
    }
};

// Delete a highschool by ID
export const deleteHighSchool = async (req, res) => {
    const { hs_id } = req.params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(hs_id)) {
        return res.status(404).json({ success: false, message: "Invalid highschool ID" });
    }

    try {
        await HighSchool.findByIdAndDelete(hs_id);
        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (error) {
        console.error("Error in Delete HighSchool: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Update a highschool by ID
export const updateHighSchool = async (req, res) => {
    const { hs_id } = req.params;
    const highschool = req.body;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(hs_id)) {
        return res.status(404).json({ success: false, message: "Invalid highschool ID" });
    }

    try {
        // Update highschool and return the updated document
        const updatedHighSchool = await HighSchool.findByIdAndUpdate(hs_id, highschool, { new: true });

        if (!updatedHighSchool) {
            return res.status(404).json({ success: false, message: "HighSchool not found" });
        }

        res.status(200).json({ success: true, data: updatedHighSchool });
    } catch (error) {
        console.error("Error in Update HighSchool: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
