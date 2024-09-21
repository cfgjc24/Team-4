import React from 'react';
import { Box, Typography, TextField, FormControl, Button } from '@mui/material';
import Header from '../components/header';




function AdminSignIn() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            university: document.getElementById('uni-affiliation').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            };
        }
      
      }
    return (
        <div>
        <Header />
        <Typography variant='h3' marginBottom={2}>Admin Sign Up</Typography>
       <Box sx = {{display: 'flex', flexDirection: 'column', gap: 3}}>
        <Box sx = {{display: 'flex', gap: 2}}>
        <FormControl fullWidth>
            <TextField 
            required
            id="first-name"
            label="First Name"
            variant="outlined"
            type = "text"
            />
        </FormControl>
        <FormControl fullWidth>
            <TextField
            required
            id="last-name"
            label="Last Name"
            variant="outlined"
            type = "text"
            />
        </FormControl>
       </Box>

       <Box sx = {{display: 'flex', flexDirection: 'column', gap: 2}}>
        <FormControl fullWidth>
            <TextField
            required
            id="admin-id"
            label="Admin ID"
            variant="outlined"
            type = "number"
            />
        </FormControl>

        <FormControl fullWidth>
            <TextField
            required
            id="uni-affiliation"
            label="University Affiliation"
            variant="outlined"
            type = "text"
            />
        </FormControl>
        
        </Box>


       <Box sx = {{display: 'flex', flexDirection: 'column', gap: 2}}>
        <FormControl fullWidth>
            <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            />
        </FormControl>
        <FormControl fullWidth>
            <TextField
            required
            id="password"
            label="Password"
            variant="outlined"
            />
        </FormControl>


        </Box>

        <Button variant="contained" color="primary" onClick={handleSubmit}>Sign Up</Button>
        </Box>
      

       </div>

    
    );


}

export default AdminSignIn;