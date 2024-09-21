import mongoose from 'mongoose';
import Metrics from "../models/metrics.model.js";

export const getMetrics = async (req, res) => {
    try {
        const metrics = await Metrics.find({});
        res.status(200).json({ success: true, data: metrics });
    } catch (error) {
        console.log("Error in fetching metrics: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getMetricBySurvey = async (req, res) => {
    const { surveytype } = req.params; 
    try {
        const metrics = await Metrics.find({ surveytype });
        res.status(200).json({ success: true, data: metrics });
    } catch (error) {
        console.log("Error in fetching metrics: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getMetricByHS = async (req, res) => {
    const { highschool_id } = req.params; 
    try {
        const metrics = await Metrics.find({ "student.highschool_id": highschool_id });
        res.status(200).json({ success: true, data: metrics });
    } catch (error) {
        console.log("Error in fetching metrics: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getMetricByRace = async (req, res) => {
    const { highschool_id } = req.params; 
    try {
        const metrics = await Metrics.find({ "student.race": race });
        res.status(200).json({ success: true, data: metrics });
    } catch (error) {
        console.log("Error in fetching metrics: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getMetricByGender = async (req, res) => {
    const { highschool_id } = req.params; 
    try {
        const metrics = await Metrics.find({ "student.gender": gender });
        res.status(200).json({ success: true, data: metrics });
    } catch (error) {
        console.log("Error in fetching metrics: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Rename this function to avoid conflict with the Metrics model
export const createMetric = async (req, res) => {
    const {
        surveytype,
        student,
        module,
        question1,
        question2,
        question3,
        question4, 
        question5, 
        question6, 
        question7,
        question8,
        question9,
        question10,
        question11,
        question12,
        question13,
        question14, 
        question15, 
        question16, 
        question17,
        question18,
        question19,
        question20,
        question21,
        question22
    } = req.body;

    try {
        const existingMetric = await Metrics.findOne({ student, surveytype });

        if (existingMetric) {
            return res.status(400).json({ message: "Metrics with this user information already exist" });
        }

        const newMetric = new Metrics({
            surveytype,
            student,
            module,
            question1,
            question2,
            question3,
            question4, 
            question5, 
            question6, 
            question7,
            question8,
            question9,
            question10,
            question11,
            question12,
            question13,
            question14, 
            question15, 
            question16, 
            question17,
            question18,
            question19,
            question20,
            question21,
            question22
        });

        await newMetric.save();
        res.status(201).json({ message: "Metric successfully saved to database", data: newMetric });
    } catch (error) {
        console.log("Error in saving metric: ", error.message);
        res.status(500).json({ message: "Server error: " + error.message });
    }
};
