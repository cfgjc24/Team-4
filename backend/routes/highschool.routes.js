import express from "express";

import { createHighSchool, getHighSchool, getHighSchools, updateHighSchool, deleteHighSchool } from '../controllers/highschool.controllers.js';

const router = express.Router();

router.get("/", getHighSchools);

router.get("/:id", getHighSchool);

router.post("/", createHighSchool);

router.delete("/:id", deleteHighSchool);

router.put("/:id", updateHighSchool);

export default router;