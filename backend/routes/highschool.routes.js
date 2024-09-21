import express from "express";

import { createHighSchool, getHighSchool, updateHighSchool, deleteHighSchool } from '../controllers/teacher.controllers.js';

const router = express.Router();

router.get("/:id", getHighSchool);

router.post("/", createHighSchool);

router.delete("/:id", deleteHighSchool);

router.put("/:id", updateHighSchool);

export default router;