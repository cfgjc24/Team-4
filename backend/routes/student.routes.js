import express from "express";

import { createStudent, getStudents, updateStudent, deleteStudent } from '../controllers/Student.controllers.js';

const router = express.Router();

router.get("/", getStudents);

router.post("/", createStudent);

router.delete("/:id", deleteStudent);

router.put("/:id", updateStudent);

export default router;