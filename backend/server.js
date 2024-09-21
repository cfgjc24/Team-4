import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import studentRoutes from "./routes/student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import tutorRoutes from "./routes/tutor.routes.js";
import chapterRoutes from "./routes/chapter.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import highschoolRoutes from "./routes/highschool.routes.js";
import userRoutes from "./routes/user.routes.js";

// allows us to see environment info
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // middle layer that allows us to parse json data in body

app.use("/api/students", studentRoutes); // set prefix for all route methods
app.use("/api/teachers", teacherRoutes); // set prefix for all route methods
app.use("/api/tutors", tutorRoutes); // set prefix for all route methods
app.use("/api/chapters", chapterRoutes); // set prefix for all route methods
app.use("/api/admins", adminRoutes); // set prefix for all route methods
app.use("/api/highschools", highschoolRoutes); // set prefix for all route methods
app.use("/api/users", userRoutes);

// prints message to homepage
app.get("/", (req, res) => {
    res.send("server is ready to go");
});

app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:" + PORT);
});