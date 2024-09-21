import express from "express";

import { createTutor, getTutors, updateTutor, deleteTutor } from '../controllers/tutor.controllers.js';

const router = express.Router();

router.get("/", getTutors);

router.post("/", createTutor);

router.delete("/:email", deleteTutor); // admin functionality

router.put("/:email", updateTutor); // student profile

export default router;