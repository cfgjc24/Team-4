// routes/tutor.routes.js
import express from "express";
import Tutor from "../models/tutor.model.js";
import HighSchool from "../models/highschool.model.js";

const router = express.Router();

/** Add a new tutor **/
router.post("/add", async (req, res) => {
    try {
        const { name, password, chapter, highschool_id, email, race, ethnicity, gender, pronouns, availability } = req.body;

        // Verify that all highschool_ids exist in the HighSchool collection
        for (const id of highschool_id) {
            const highSchool = await HighSchool.findOne({ id });
            if (!highSchool) {
                return res.status(404).json({ message: `High school with id ${id} not found!` });
            }
        }

        // Create a new tutor instance
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

        // Save the tutor to the database
        await newTutor.save();

        res.status(201).json({ message: "Tutor added successfully!" });
    } catch (error) {
        // Check for duplicate email error
        if (error.code === 11000) {
            res.status(400).json({ message: "Tutor with this email already exists!" });
        } else {
            res.status(500).json({ message: "Server error: " + error.message });
        }
    }
});

/** Get all tutors **/
router.get("/", async (req, res) => {
    try {
        const tutors = await Tutor.find().populate('highschool_id', 'name city state');
        res.status(200).json(tutors);
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
});

/** Get a tutor by email **/
router.get("/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const tutor = await Tutor.findOne({ email }).populate('highschool_id', 'name city state');
        if (!tutor) {
            return res.status(404).json({ message: "Tutor not found!" });
        }
        res.status(200).json(tutor);
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
});

/** Update a tutor's information **/
router.put("/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const { highschool_id } = req.body;

        // If highschool_id is being updated, verify all ids exist in the HighSchool collection
        if (highschool_id) {
            for (const id of highschool_id) {
                const highSchool = await HighSchool.findOne({ id });
                if (!highSchool) {
                    return res.status(404).json({ message: `High school with id ${id} not found!` });
                }
            }
        }

        const updatedTutor = await Tutor.findOneAndUpdate(
            { email },
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedTutor) {
            return res.status(404).json({ message: "Tutor not found!" });
        }
        res.status(200).json({ message: "Tutor updated successfully!", updatedTutor });
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
});

/** Delete a tutor **/
router.delete("/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const deletedTutor = await Tutor.findOneAndDelete({ email });
        if (!deletedTutor) {
            return res.status(404).json({ message: "Tutor not found!" });
        }
        res.status(200).json({ message: "Tutor deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error: " + error.message });
    }
});

export default router;
