import express from "express";

import { createTutor, getTutor, updateTutor, deleteTutor, getTutor } from '../controllers/tutor.controllers.js';

const router = express.Router();

router.get("/", getTutor);

router.post("/", createTutor);

router.delete("/:id", deleteTutor);
router.delete("/:email", deleteTutor); // admin functionality

router.put("/:email", updateTutor); // student profile

export default router;