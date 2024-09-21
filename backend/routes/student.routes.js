import express from "express";

import { createStudent, getStudents, updateStudent, deleteStudent, getStudent } from '../controllers/student.controllers.js';

const router = express.Router();

router.get("/", getStudents);

router.get("/:email", getStudent);

router.post("/", createStudent); // student create account

router.delete("/:email", deleteStudent); // admin functionality

router.put("/:email", updateStudent); // student profile

export default router;
