import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import cors from 'cors';

import studentRoutes from "./routes/student.routes.js";
import metricRoutes from './routes/metrics.routes.js';  // Make sure this path is correct
import cors from 'cors';
import teacherRoutes from "./routes/teacher.routes.js";
import tutorRoutes from "./routes/tutor.routes.js";
import chapterRoutes from "./routes/chapter.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import highschoolRoutes from "./routes/highschool.routes.js";
import matchRoutes from "./routes/match.routes.js";

import userRoutes from "./routes/user.routes.js";

// allows us to see environment info
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5001;

//enable cors for all routes
app.use(cors());

app.use(express.json()); // middle layer that allows us to parse json data in body
app.use(cors());  // Enable CORS for all routes



app.use("/api/metrics/", metricRoutes); // set prefix for all route methods
app.use("/api/students", studentRoutes); // set prefix for all route methods
app.use("/api/teachers", teacherRoutes); // set prefix for all route methods
app.use("/api/tutors", tutorRoutes); // set prefix for all route methods
app.use("/api/chapters", chapterRoutes); // set prefix for all route methods
app.use("/api/admins", adminRoutes); // set prefix for all route methods
app.use("/api/highschools", highschoolRoutes); // set prefix for all route methods
app.use("/api/match", matchRoutes); // set prefix for all route methods

app.use("/api/users", userRoutes);

// prints message to homepage
app.get("/", (req, res) => {
    res.send("server is ready to go");
});

app.post('/api/verify-birthday', (req, res) => {
    const { birthday } = req.body;
    
    // fake a delay for "verification"
    setTimeout(() => {
        //  return success response for fake verification
        res.json({ success: true, message: 'Birthday verified successfully!' });
    }, 1000); // 1-second delay to fake processing
});

app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:" + PORT);
});

