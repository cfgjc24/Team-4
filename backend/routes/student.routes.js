import express from "express";

<<<<<<< HEAD
import { createStudent, getStudents, updateStudent, deleteStudent } from '../controllers/student.controllers.js';
=======
import { createStudent, getStudents, updateStudent, deleteStudent, getStudent } from '../controllers/student.controllers.js';
>>>>>>> 846f8410ccf882b5c439cb8a4108f86aa460c010

const router = express.Router();

router.get("/", getStudents);

<<<<<<< HEAD
router.post("/", createStudent);

router.delete("/:id", deleteStudent);

router.put("/:id", updateStudent);
=======
router.get("/:email", getStudent);

router.post("/", createStudent); // student create account

router.delete("/:email", deleteStudent); // admin functionality

router.put("/:email", updateStudent); // student profile
>>>>>>> 846f8410ccf882b5c439cb8a4108f86aa460c010

export default router;