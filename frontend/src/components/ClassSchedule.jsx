import React from 'react';
import Navbar from '../components/NavBar';
import { Typography } from '@mui/material';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { useEffect } from 'react';


function ClassSchedule() {
    useEffect(async () => {
        try {
            const response = await fetch('http://localhost:5001/api/highschools/getHighSchools');
            const data = await response.json();
            console.log(data);
        }
        catch(error)
        {
            console.log(error);
        }
    }, []);

    return (
        <>
            <Navbar/>
            <Typography variant='h3' marginBottom={2}>Class Schedule</Typography>
        </>
    );
}


export default ClassSchedule;