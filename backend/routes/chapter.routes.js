import express from "express";

import { createChapter, getChapters, updateChapter, deleteChapter, getChapter } from '../controllers/chapter.controller.js';

const router = express.Router();

router.get("/", getChapters);

router.get("/:name", getChapter);

router.post("/", createChapter); // student create account

router.delete("/:name", deleteChapter); // admin functionality

router.put("/:name", updateChapter); // student profile

export default router;