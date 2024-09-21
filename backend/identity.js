const express = require('express');
const multer = require('multer');
const IdAnalyzer = require('id-analyzer');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Initialize ID Analyzer with your API key from environment variable
const CoreAPI = new IdAnalyzer.CoreAPI(process.env.ID_ANALYZER_API_KEY);

// Endpoint to handle ID photo upload and birthday check
app.post('/check-birthday', upload.single('idImage'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        // Read the file path
        const idImagePath = req.file.path;

        // Use CoreAPI to scan the uploaded image
        const response = await CoreAPI.scan({
            file: idImagePath,
            face: true,   // Set to true to perform face detection and matching
            barcode: true // Set to true to scan barcode if available
        });

        // Check for a successful response
        if (response.error) {
            return res.status(400).send(`Error: ${response.error.message}`);
        }

        // Extract the date of birth from the response
        const dob = response.result?.dob;

        if (!dob) {
            return res.status(400).send('Date of birth not found on ID.');
        }

        // Convert the DOB to a Date object
        const birthDate = new Date(dob);

        // Get today's date and calculate the age
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        // Set a minimum age requirement (e.g., 18 years)
        const minimumAge = 18;

        // Check if the person meets the age requirement
        if (age >= minimumAge) {
            res.send(`User is ${age} years old and meets the age requirement.`);
        } else {
            res.send(`User is ${age} years old and does not meet the age requirement.`);
        }
    } catch (error) {
        console.error('Error processing ID:', error);
        res.status(500).send('An error occurred while processing the ID.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
