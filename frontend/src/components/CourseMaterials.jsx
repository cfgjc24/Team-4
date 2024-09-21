import React from 'react';
// import Header from './header';
import { Box, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

const lessons = [
    { title: "Lesson 1: Personal Finance"},
    { title: "Lesson 2: What is a Stock?"},
    { title: "Lesson 3: What is a Bond?"},
    { title: "Lesson 4: Volatility and Diversification"},
    { title: "Lesson 5: Mutual Funds / ETFs" },
    { title: "Lesson 6: Compound Interest / Dollar-cost averaging"},
    { title: "Lesson 7: Personal Finance II" },
    { title: "Capstone project"},
    { title: "More Financial Topics" },
];


function CourseMaterials() {

    const navigate = useNavigate();

    const handleNavigation = (lesson) => {
        console.log(lesson)
        const dataToPass = { message: lesson};
        navigate('../Slides', { state: dataToPass });
    };

    return (
        <div>
            {/* <Header /> */}
            <Navbar></Navbar>

             <h1>Course Materials</h1>
            <div className="grid-container">
                {lessons.map((lesson, index) => (
                    <Box
                        key={index}
                        className="lesson-button"
                        component="a"
                        onClick={() => handleNavigation(lesson)}
                        target="_blank"
                    >
                        <AccountBalanceIcon className="lesson-icon" />
                        <Typography variant="h6">{lesson.title}</Typography>
                    </Box>
                ))}
            </div>
        </div>
    );
}

export default CourseMaterials;
