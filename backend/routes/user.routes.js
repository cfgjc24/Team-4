// routes/user.routes.js
import express from "express";
import { checkUserType } from "../backend/checkUserType.js";

const router = express.Router();

// Route to check user type and redirect accordingly
router.post("/checkUserType", checkUserType);

export default router;
