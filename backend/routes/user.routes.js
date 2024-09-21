// routes/user.routes.js
import express from "express";
import { checkUserType } from "../backend/checkUserType.js";

const router = express.Router();

// check user type and redirect
router.post("/checkUserType", checkUserType);

export default router;
