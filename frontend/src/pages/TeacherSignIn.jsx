import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Header from '../components/header';


function TeacherSignIn() {
    const handleSubmit = async (event) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('first-name').value + " " + document.getElementById('last-name').value,
            password: document.getElementById('password').value,

            


    };

}
    const states = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 
        'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 
        'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 
        'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 
        'WI', 'WY'
      ];
      const [state, setState] = React.useState('');


  const handleStateChange = (event) => {
    setState(event.target.value);
  };

    
    return (
        <div>
          <Header />
          <Typography variant='h3' marginBottom={2}>Teacher Sign Up</Typography>
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
            </Box>
    
            <Box sx={{ display: 'flex', gap: 2 }}>
             
              <FormControl fullWidth>
                <TextField
                  required
                  id="high-school"
                  label="School Affiliation"
                  variant="outlined"
                  sx = {{
                    backgroundColor: 'white',
                  }}
                />
              </FormControl>
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
            </Box>
    
            <Box sx={{ display: 'flex', gap: 2 }}>
              
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
    
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Sign In
            </Button>
    
          </Box>
        </div>
      );
}


export default TeacherSignIn;