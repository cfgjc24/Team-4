import React from 'react';
import Header from '../components/header';
import { FormControl, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { visuallyHidden } from '@mui/utils';
import Box from '@mui/material/Box';



function StudentSignIn() {
    return (
        <div>
            <Header />
            <h1>Student Sign In</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                noValidate
                autoComplete="off"
            >
            <FormControl>
                <TextField 
                required 
                id = "first-name"
                label = "First Name"
                type = "string"
                variant = "outlined"
                />
               
            </FormControl>
            <FormControl>
            <TextField 
                required 
                id = "last-name"
                label = "Last Name"
                type = "string"
                variant = "outlined"
                />
            </FormControl>
            <FormControl>
                <TextField
                required
                id = "race"
                label = "race"
                type = "string"
                variant = "outlined"
                />
            </FormControl>
            <FormControl>
                <TextField
                required
                id = "ethnicity"
                label = "ethnicity"
                type = "string"
                variant = "outlined"
                />
            </FormControl>
            <FormControl>
                <TextField
                required
                id = "age"
                label = "age"
                type = "number"
                variant = "outlined"
                />
            </FormControl>
            <FormControl>
                <Select
                required
                id = "state"
                label = "state"
                variant = "outlined"
                />
            </FormControl>
            <FormControl>
                <TextField
                required
                id = "city"
                label = "city"
                type = "string"
                variant = "outlined"
                />
            </FormControl>
            <FormControl>
                <TextField
                required
                id = "high-school"
                label = "high school"
                type = "string"
                variant = "outlined"
                />
            </FormControl>
            <FormControl>
                <TextField
                required
                id = "email"
                label = "email"
                type = "email"
                variant = "outlined"
                />
            </FormControl>
            <FormControl>
                <TextField
                required
                id = "password"
                label = "password"
                type = "password"
                variant = "outlined"
                />
            </FormControl>
            <FormControl>
            <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            >
            Upload files
            </Button>
            
            </FormControl>
            </Box>
            
        </div>
    )
};



export default StudentSignIn;