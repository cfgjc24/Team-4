import React from 'react';
import Header from '../components/header';
import { Box, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const lessons = [
    { title: "Lesson 1: Personal Finance", link: "https://sites.google.com/view/fgistudent/curriculum/1-personal-finance?authuser=0" },
    { title: "Lesson 2: What is a Stock?", link: "https://sites.google.com/view/fgistudent/curriculum/2-what-is-a-stock?authuser=0" },
    { title: "Lesson 3: What is a Bond?", link: "https://sites.google.com/view/fgistudent/curriculum?authuser=0#h.l843x5gjtqzs" },
    { title: "Lesson 4: Volatility and Diversification", link: "https://sites.google.com/view/fgistudent/curriculum?authuser=0#h.1e028pa897uu" },
    { title: "Lesson 5: Mutual Funds / ETFs", link: "https://sites.google.com/view/fgistudent/curriculum?authuser=0#h.6rcozhai5143" },
    { title: "Lesson 6: Compound Interest / Dollar-cost averaging", link: "https://sites.google.com/view/fgistudent/curriculum?authuser=0#h.xra05acyaase" },
    { title: "Lesson 7: Personal Finance II", link: "https://sites.google.com/view/fgistudent/curriculum?authuser=0#h.dk20rcea4wkj" },
    { title: "Capstone project", link: "https://sites.google.com/view/fgistudent/curriculum?authuser=0#h.kx97n2uwp84u" },
    { title: "More Financial Topics", link: "https://sites.google.com/view/fgistudent/curriculum?authuser=0#h.3b1plegacopw" },
];

function CourseMaterials() {
    return (
        <div>
            <Header />
            <h1>Course Materials</h1>
            <div className="grid-container">
                {lessons.map((lesson, index) => (
                    <Box
                        key={index}
                        className="lesson-button"
                        component="a"
                        href={lesson.link}
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
