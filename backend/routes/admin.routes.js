// routes/admin.routes.js
import express from "express";

import {
  createAdmin,
  getAdmins,
  getAdminByEmail,
  updateAdmin,
  deleteAdmin,
} from "../controllers/admin.controllers.js";

const router = express.Router();

// Route to get all admins
router.get("/", getAdmins);

// Route to get a specific admin by email
router.get("/:email", getAdminByEmail);

// Route to create a new admin
router.post("/", createAdmin);

// Route to update an admin by email
router.put("/:email", updateAdmin);

// Route to delete an admin by email
router.delete("/:email", deleteAdmin);

export default router;
