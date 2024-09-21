import express from "express";

import { createChapter, getChapters, updateChapter, deleteChapter, getChapter } from '../controllers/chapter.controller.js';

const router = express.Router();

router.get("/", getChapter);

router.get("/:email", getChapter);

router.post("/", createChapter); // student create account

router.delete("/:email", deleteChapter); // admin functionality

router.put("/:email", updateChapter); // student profile

export default router;