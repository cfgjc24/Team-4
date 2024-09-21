import React from 'react';
import Header from '../components/header';
import { FormControl, TextField, Box, Button, Select, MenuItem, InputLabel, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/system';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Add, Delete } from '@mui/icons-material';
import dayjs from 'dayjs';
import { useState } from 'react';


function TutorSignIn() {
    
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
    
      const states = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 
        'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 
        'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 
        'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 
        'WI', 'WY'
      ];

      const [availability, setAvailability] = useState ([{ start: dayjs(), end: dayjs().add(1, 'hour') }]);

      const handleAdd = () => {  setAvailability([...availability, { start: dayjs(), end: dayjs().add(1, 'hour') }]); };

      const handleChange = (index, key, newValue) => {
        const newAvailability = availability.map((slot, i) =>
          i === index ? { ...slot, [key]: newValue } : slot
        );
        setAvailability(newAvailability);
      };

        const handleDelete = (index) => { 
            const newAvailability = availability.filter((slot, i) => i !== index);
            setAvailability(newAvailability);
        };
    
    
    
      const [state, setState] = React.useState('');

      const fileInputRef = React.useRef(null);
    
      const handleStateChange = (event) => {
        setState(event.target.value);
      };
    
      const handleUploadFile = () => {
        fileInputRef.current.click();
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic
      };
    return (
        <div style={{ minHeight: '100vh', padding: '50px'}}>
          <Header />
          <Typography variant='h3' marginBottom={2}> Tutor Sign Up </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
                <TextField 
                  required 
                  id="first-name"
                  label="First Name"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField 
                  required 
                  id="last-name"
                  label="Last Name"
                  variant="outlined"
                />
              </FormControl>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
                <TextField
                  required
                  id="race"
                  label="Race"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  id="ethnicity"
                  label="Ethnicity"
                  variant="outlined"
                />
              </FormControl>
            </Box>
    
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
                <TextField
                  required
                  id="age"
                  label="Age"
                  type="number"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="state-label">State</InputLabel>
                <Select
                  required
                  labelId="state-label"
                  id="state"
                  value={state}
                  onChange={handleStateChange}
                  label="State"
                  variant="outlined"
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
    
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
                <TextField
                  required
                  id="city"
                  label="City"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  id="university"
                  label="University"
                  variant="outlined"
                />
              </FormControl>
            </Box>
    
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
                <TextField
                  required
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </FormControl>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
                <TextField
                  required
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </FormControl>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        {availability.map((slot, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            <Box flex={1} mr={1}>
              <DateTimePicker
                label="Start Time"
                value={slot.start}
                onChange={(newValue) => handleChange(index, 'start', newValue)}
                renderInput={(props) => <TextField {...props} fullWidth />}
              />
            </Box>
            <Box flex={1} mr={1}>
              <DateTimePicker
                label="End Time"
                value={slot.end}
                onChange={(newValue) => handleChange(index, 'end', newValue)}
                renderInput={(props) => <TextField {...props} fullWidth />}
              />
            </Box>
            <IconButton color="error" onClick={() => handleDelete(index)}>
              <Delete />
            </IconButton>
          </Box>
        ))}
        <Button variant="contained" onClick={handleAdd} startIcon={<Add />}>
          Add Availability Slot
        </Button>
      </Box>
    </LocalizationProvider>
            </Box>
    
            <Box sx={{ display: 'flex', gap: 2, textAlign: 'center' }}>
              <FormControl fullWidth>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  onClick={handleUploadFile}
                >
                  Upload ID for Background Check
                  <VisuallyHiddenInput
                    type="file"
                    ref={fileInputRef}
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                  />
                </Button>
              </FormControl>
            </Box>
    
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Sign Up
            </Button>
    
          </Box>
        </div>
      );

};

export default TutorSignIn;