import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import studentRoutes from "./routes/student.routes.js";

// allows us to see environment info
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // middle layer that allows us to parse json data in body

app.use("/api/students", studentRoutes); // set prefix for all route methods

// prints message to homepage
app.get("/", (req, res) => {
    res.send("server is ready to go");
});

app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:" + PORT);
});