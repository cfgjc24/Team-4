import express from "express";

<<<<<<< HEAD
import { createStudent, getStudents, updateStudent, deleteStudent, getStudent } from '../controllers/student.controllers.js';
=======
<<<<<<< HEAD
import { createStudent, getStudents, updateStudent, deleteStudent } from '../controllers/student.controllers.js';
=======
import { createStudent, getStudents, updateStudent, deleteStudent, getStudent } from '../controllers/student.controllers.js';
>>>>>>> 846f8410ccf882b5c439cb8a4108f86aa460c010
>>>>>>> 14e049da0ba1c30e9ad0f7cca824a2d0e3157372

const router = express.Router();

router.get("/", getStudents);

<<<<<<< HEAD
=======
<<<<<<< HEAD
router.post("/", createStudent);

router.delete("/:id", deleteStudent);

router.put("/:id", updateStudent);
=======
>>>>>>> 14e049da0ba1c30e9ad0f7cca824a2d0e3157372
router.get("/:email", getStudent);

router.post("/", createStudent); // student create account

router.delete("/:email", deleteStudent); // admin functionality

router.put("/:email", updateStudent); // student profile
<<<<<<< HEAD
=======
>>>>>>> 846f8410ccf882b5c439cb8a4108f86aa460c010
>>>>>>> 14e049da0ba1c30e9ad0f7cca824a2d0e3157372

export default router;