// controllers/admin.controller.js
import mongoose from 'mongoose';
import Admin from "../models/admin.model.js";

// Get all admins
export const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.status(200).json({ success: true, data: admins });
    } catch (error) {
        console.log("Error in fetching admins: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Get admin by email
export const getAdminByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ success: false, message: "Admin not found!" });
        }
        res.status(200).json({ success: true, data: admin });
    } catch (error) {
        console.log("Error in fetching admin: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Create a new admin 
export const createAdmin = async (req, res) => {
    const admin = req.body;
    if (!admin.name || !admin.email || !admin.password) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newAdmin = new Admin(admin);

    try {
        await newAdmin.save();
        res.status(201).json({ success: true, data: newAdmin });
    } catch (error) {
        console.error("Error in Create Admin: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Delete an admin by email 
export const deleteAdmin = async (req, res) => {
    const { email } = req.params;
    try {
        const deletedAdmin = await Admin.findOneAndDelete({ email });
        if (!deletedAdmin) {
            return res.status(404).json({ success: false, message: "Admin not found!" });
        }
        res.status(200).json({ success: true, message: "Admin deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Update an admin's information 
export const updateAdmin = async (req, res) => {
    const { email } = req.params;
    const adminData = req.body;

    try {
        const updatedAdmin = await Admin.findOneAndUpdate(
            { email },
            adminData,
            { new: true, runValidators: true }
        );
        if (!updatedAdmin) {
            return res.status(404).json({ success: false, message: "Admin not found!" });
        }
        res.status(200).json({ success: true, data: updatedAdmin });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
