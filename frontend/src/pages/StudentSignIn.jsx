import React from 'react';
import Header from '../components/header';
import { FormControl, TextField, Box, Button, Select, MenuItem, InputLabel } from '@mui/material';
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
    
    const formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        race: document.getElementById('race').value,
        ethnicity: document.getElementById('ethnicity').value,
        age: document.getElementById('age').value,
        state: state,
        city: document.getElementById('city').value,
        highSchool: document.getElementById('high-school').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        };

        await (sendData(formData));
    }

    const sendData = async (formData) => {
        try {
        const response = await fetch('http://localhost:5000/student-signup', {
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
            <TextField
              required
              id="race"
              label="Race"
              variant="outlined"
              sx = {{
                backgroundColor: 'white',
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              required
              id="ethnicity"
              label="Ethnicity"
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
