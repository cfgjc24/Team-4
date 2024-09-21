import express from "express";

import { createTeacher, getTeachers, getTeachersBySchool, updateTeacher, deleteTeacher } from '../controllers/teacher.controllers.js';

const router = express.Router();

router.get("/", getTeachers);

router.post("/", createTeacher);

router.delete("/:email", deleteTeacher);

router.put("/:email", updateTeacher);

router.put("/:highschool_id", getTeachersBySchool);

export default router;