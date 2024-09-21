import express from "express";

import { createHighSchool, getHighSchoolIdFromData, getHighSchools, updateHighSchool, deleteHighSchool } from '../controllers/highschool.controllers.js';

const router = express.Router();

router.get("/", getHighSchools);

router.post("/", createHighSchool);

router.delete("/:id", deleteHighSchool);

router.put("/:id", updateHighSchool);

router.get("/:name/:city/:state", getHighSchoolIdFromData);

export default router;