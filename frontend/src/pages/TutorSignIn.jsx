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
import { useNavigate } from 'react-router-dom';


function TutorSignIn() {
    const navigate = useNavigate();
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

      const pronouns = ['He/Him', 'She/Her', 'They/Them', 'Other'];
      const genders =  ['Male', 'Female', 'Non-Binary', 'Other'];
      const races = ["White", "Black", "Hispanic", "Asian", "Native American", "Pacific Islander", "Other"];
      const ethnicities = ["Non-Hispanic", "Hispanic", "Unknown"];

      const [pronoun, setPronoun] = useState('');
      const [state, setState] = React.useState('');
      const [gender, setGender] = React.useState('');
      const [ethnicity, setEthnicity] = React.useState('');
      const[race, setRace] = React.useState('');
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
        const handlePronounsChange = (event) => {
          setPronoun(event.target.value);
          };
      
          const handleGenderChange = (event) => {
          setGender(event.target.value);
         
          };

        
      const handleEthnicityChange = (event) => {
        setEthnicity(event.target.value);
        };
      const handleRaceChange = (event) => {
        setRace(event.target.value);
      };

      const fileInputRef = React.useRef(null);
    
      const handleStateChange = (event) => {
        setState(event.target.value);
      };
    
      const handleUploadFile = () => {
        fileInputRef.current.click();
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = {
            name: document.getElementById('first-name').value + " " + document.getElementById('last-name').value,
            password: document.getElementById('password').value,
            chapter: 'chapter',
            highschool_id: '66ee44fd633444e0a93bc552',
            email: document.getElementById('email').value,
            race: race,
            ethnicity: ethnicity,
            gender: gender,
            pronouns: pronoun,     
            availability: availability.map((slot) => ({
                start: slot.start.toISOString(),
                end: slot.end.toISOString(),
            })),
        };

        await sendData(formData);
      };
          
          
            const sendData = async (formData) => {

              const response = await fetch('/api/tutors/createTutor', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });
          
              if (response.ok) {
                navigate('/tutor-dashboard');
              } else {
                alert('Failed to create tutor!');
                console.error(response);
              };
       
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
                  sx = {{
                    backgroundColor: 'white',
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField 
                  required 
                  id="last-name"
                  label="Last Name"
                  variant="outlined"
                  sx = {{
                    backgroundColor: 'white',
                  }}
                />
              </FormControl>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
            <InputLabel id= "race-label">Race</InputLabel>
            <Select
                required
                labelId="race-label"
                id="race"
                value={race}
                onChange={handleRaceChange}
                label="Race"
                variant="outlined"
                sx = {{
                    backgroundColor: 'white',
                }}
                >
                    {races.map((race) => (
                        <MenuItem key = {race} value={race}>
                            {race}
                        </MenuItem>
                    ))}
                </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="ethnicity-label"> Ethnicity</InputLabel>
            <Select 
                required
                labelId="ethnicity-label"
                id = "ethnicity"
                value={ethnicity}
                onChange={handleEthnicityChange}
                label="Ethnicity"
                sx = {{
                    backgroundColor: 'white',
                }}
                >
                    {ethnicities.map((ethnicity) => (
                        <MenuItem key = {ethnicity} value = {ethnicity}>
                            {ethnicity}
                        </MenuItem>
                    ))}
                </Select>
          </FormControl>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="pronoun-label">Pronouns</InputLabel>
                <Select
                    required
                    labelId="pronoun-label"
                    id="pronoun"
                    value={pronoun}
                    onChange={handlePronounsChange}
                    label="Pronouns"
                    sx = {{
                        backgroundColor: 'white',
                    }}
                    >
                        {pronouns.map((pronoun) => (
                            <MenuItem key = {pronoun} value={pronoun}>
                                {pronoun}
                            </MenuItem>
                        ))}
                    </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                    required
                    labelId = "gender-label"
                    id="gender"
                    value={gender}
                    onChange={handleGenderChange}
                    label="Gender"
                    sx = {{
                        backgroundColor: 'white',
                    }}
                >
                    {genders.map((pronoun) => (
                        <MenuItem key = {pronoun} value={pronoun}>
                            {pronoun}
                        </MenuItem>
                    ))}
                </Select>
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
                  sx = {{
                    backgroundColor: 'white',
                  }}
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
                  sx = {{
                    backgroundColor: 'white',
                  }}
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
                  sx = {{
                    backgroundColor: 'white',
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  id="university"
                  label="University"
                  variant="outlined"
                  sx = {{
                    backgroundColor: 'white',
                  }}
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
                  sx = {{
                    backgroundColor: 'white',
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  sx = {{
                    backgroundColor: 'white',
                  }}
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
                  sx = {{
                    backgroundColor: 'white',
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  sx = {{
                    backgroundColor: 'white',
                  }}
                />
              </FormControl>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        {availability.map((slot, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            <Box flex={1} mr={1} sx = {{backgroundColor: 'white'}}>
              <DateTimePicker
                label="Start Time"
                value={slot.start}
                onChange={(newValue) => handleChange(index, 'start', newValue)}
                renderInput={(props) => <TextField {...props} fullWidth />}
              />
            </Box>
            <Box flex={1} mr={1} sx = {{backgroundColor: 'white'}}>
              <DateTimePicker
                label="End Time"
                value={slot.end}
                onChange={(newValue) => handleChange(index, 'end', newValue)}
                renderInput={(props) => <TextField {...props} fullWidth />}
              />
            </Box>
            <IconButton color="error" onClick={() => handleDelete(index)} sx = {{ '&:hover': {
      backgroundColor: 'rgba(255, 0, 0, 0.1)',  color: 'darkred',  
    },}}>
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