import express from "express";

import { createHighSchool, getHighSchools, updateHighSchool, deleteHighSchool } from '../controllers/highschool.controllers.js';

const router = express.Router();

router.get("/", getHighSchools);

router.post("/createHighSchool", createHighSchool);

router.delete("/:id", deleteHighSchool);

router.put("/:id", updateHighSchool);

export default router;