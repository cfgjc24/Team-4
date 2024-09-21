// routes/metrics.routes.js
import express from "express";
import {
  createMetric,
  getMetrics,
  getMetricByHS,
  getMetricByGender,
  getMetricBySurvey,
  getMetricByRace, 
} from "../controllers/metrics.controller.js";

const router = express.Router();

// Route to get all metrics
router.get("/", getMetrics);

// Route to get metrics by highschool_id
router.get("/highschool_id/:highschool_id", getMetricByHS);

// Route to push new metric
router.post("/createMetric", createMetric);

// Route to get metrics by gender
router.put("/gender/:gender", getMetricByGender);

// Route to get metrics by race
router.get("/race/:race", getMetricByRace);

// Route to get metrics by survey type
router.get("/:survey", getMetricBySurvey);

export default router;
