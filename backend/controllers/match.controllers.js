import Tutor from "../models/tutor.model.js";
import HighSchool from "../models/highschool.model.js";
import mongoose from "mongoose";

export const matchTutors = async (req, res) => {
    try {
        
       
        const {highschool_id, class_schedule} = req.body;
        const highSchool = await HighSchool.findOne({ _id: new mongoose.Types.ObjectId(highschool_id) });
        const isValidObjectId = mongoose.Types.ObjectId.isValid(highschool_id);
        if(!highSchool)
        {
            return (
                res.status(404).json({ success: false, message: "High School not found" })
            );  
        }
        const tutors = await Tutor.find({ highschool_id: highschool_id });
        const { classSchedule } = highSchool;
        if (!classSchedule || classSchedule.length === 0) {
            return res.status(404).json({ message: 'Class schedule not found or empty' });
        }
        if (!tutors || tutors.length === 0) {
          return res.status(404).json({ success: false, message: "No tutors found for this high school" });
        }

        const matchingTutors = tutors.filter(tutor => {
            return tutor.availability.some(slot => {
              return class_schedule.some(classSlot => {
                const classStart = new Date(classSlot.start);
                const classEnd = new Date(classSlot.end);
                const tutorStart = new Date(slot.start);
                const tutorEnd = new Date(slot.end);

                return tutorStart <= classEnd && tutorEnd >= classStart;
              });

            });

        });    
        return res.status(200).json({ success: true, tutors: matchingTutors });
        }catch(error)
    {
        console.log("Error in matching tutors: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }

};