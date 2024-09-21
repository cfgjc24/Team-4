import React from 'react';
import Navbar from '../components/NavBar';
import { Typography } from '@mui/material';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { useEffect, useState } from 'react';


function ClassSchedule() {
    const[schedTutors, setSchedTutors] = useState([]);
    useEffect( () => {
        async function fetchData() {
            const matchTutors = [];
            try {
                const response = await fetch('http://localhost:5001/api/highschools/getHighSchools');
                const data = await response.json();
                console.log("data.data", data.data);
                for(let i = 0; i < data.data.length; i++)
                {
                    const response = await fetch('http://localhost:5001/api/match/matchTutors', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({highschool_id: data.data[i]._id}),
                    });
                    const tutorData = await response.json();
                    matchTutors.push(tutorData.tutors);
                
                }
                setSchedTutors(matchTutors);
                console.log("schedTutors", schedTutors);
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
            <Typography variant='h5' marginBottom={2}>schedTutors</Typography>
        </>
    );
}


export default ClassSchedule;