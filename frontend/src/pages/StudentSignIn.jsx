import React from 'react';
import Header from '../components/header';
import { FormControl, TextField, Box, Button, Select, MenuItem, InputLabel, Menu } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

function StudentSignIn() {
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
  const races = ["White", "Black", "Hispanic", "Asian", "Native American", "Pacific Islander", "Other"];
  const ethnicities = ["Non-Hispanic", "Hispanic", "Unknown"];
  const pronouns = ['He/Him', 'She/Her', 'They/Them', 'Other'];
  const genders =  ['Male', 'Female', 'Non-Binary', 'Other'];
  const [pronoun, setPronoun] = React.useState('');
  const [gender, setGender] = React.useState('');
  const[race, setRace] = React.useState('');
  const [state, setState] = React.useState('');
  const [ethnicity, setEthnicity] = React.useState('');
  const fileInputRef = React.useRef(null);

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

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleUploadFile = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        first_name: document.getElementById('first-name').value,
        last_name: document.getElementById('last-name').value,
        start_week: 1,
        graduated: false,
        race: race,
        ethnicity: ethnicity,
        gender: gender,
        pronouns: pronoun,
        town: document.getElementById('city').value,
        state: state,
        highschool_id: '66ee44fd633444e0a93bc552',
        teacher_email: '66ee469a633444e0a93bc558',
        date_of_birth: '2003-08-25',
        phone_number: '1234567890',
        active: true,
        complete: false,
        w1_through_w8_attendance: [true, false, false, false, false, false, false, false],
        capstone: false,
        age: document.getElementById('age').value,
        
        
        };

        await (sendData(formData));
    }

    const sendData = async (formData) => {
        try {
        const response = await fetch('http://localhost:5001/api/students/createStudent ', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            
            navigate('/student-dashboard');
        }
        else {
            console.error(response.statusText);
        }
    } catch (error) {
        console.log("Error in trying to submit form data");
        console.log(error);
        };

    };
  

  return (
    <div>
      <Header />
      <Typography variant='h3' marginBottom={2}>Student Sign Up</Typography>
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
              id="high-school"
              label="High School"
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
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              onClick={handleUploadFile}
            >
              Upload ID
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
          Sign In
        </Button>

      </Box>
    </div>
  );
}

export default StudentSignIn;
