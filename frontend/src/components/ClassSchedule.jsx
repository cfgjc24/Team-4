import React from 'react';
import Navbar from '../components/NavBar';
import { Typography } from '@mui/material';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { useEffect } from 'react';


function ClassSchedule() {
    const schedTutors = [];
    useEffect( () => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5001/api/highschools/getHighSchools');
                const data = await response.json();
                // console.log(data);
                console.log(data.data);
                for(let i = 0; i < data.data.length; i++)
                {
                    const response = await fetch('http://localhost:5001/api/match/matchTutors', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({highschool_id: data.data[i]._id, class_schedule: data.data[i].classSchedule}),
                    });
                    const tutorData = await response.json();
                    schedTutors.push(tutorData.tutors);
                }
            }
            catch(error)
            {
                console.log(error);
            }
        }

        fetchData();
        
    }, []);

    return (
        <>
            <Navbar/>
            <Typography variant='h3' marginBottom={2}>Class Schedule</Typography>
        </>
    );
}


export default ClassSchedule;