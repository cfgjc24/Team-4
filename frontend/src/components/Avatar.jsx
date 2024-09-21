import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

import Link from '@mui/joy/Link';
import { Typography } from '@mui/material';

import { Link } from 'react-router-dom';


export default function BasicAvatars() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>

    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link href = "/student-signup"> 
   
        <Avatar size = "lg"></Avatar> 
        </Link> 
        <Link href = "/student-signup"> 
        <Typography variant = "h6" sx = {{color: 'white'}}>
          Student 
        </Typography>
        </Link>
      </Box>
    </div>
  
    

    <div> 
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
     <Link href = "/tutor-signup"> 
    <Avatar size = "lg"></Avatar> 
    </Link>
    <Link href = "/tutor-signup">
    <Typography variant = "h6" sx = {{color: 'white'}}>
    Tutor 
    </Typography>
    </Link> 
    </Box>
    </div>

    <div> 
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Link href = "/teacher-signup">
    <Avatar size = "lg"></Avatar> 
    </Link>
    <Link href = "/teacher-signup">
    <Typography variant = "h6" sx = {{color: 'white'}}>
      
      Teacher 
      
    </Typography>
    </Link> 
     
    </Box>
    </div>

    <div> 
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Link href = "/admin-signup">
    <Avatar size = "lg"></Avatar> 
    </Link>
    <Link href = "/admin-signup">
    <Typography variant = "h6" sx = {{color: 'white'}}>
      
      Admin
      
    </Typography>
    </Link> 
     
    </Box>
    </div>

=======
      <div> 
        <Link to="/student-signup" style={{ textDecoration: 'none' }}>
          <Avatar size="lg" sx={{ width: 80, height: 80 }} /> 
          <span style={{ color: 'white' }}>Student</span>
        </Link>
      </div>

      <div> 
        <Link to="/tutor-signup" style={{ textDecoration: 'none' }}>
          <Avatar size="lg" sx={{ width: 80, height: 80 }} /> 
          <span style={{ color: 'white' }}>Tutor</span>
        </Link>
      </div>

      <div> 
        <Link to="/teacher-signup" style={{ textDecoration: 'none' }}>
          <Avatar size="lg" sx={{ width: 80, height: 80 }} /> 
          <span style={{ color: 'white' }}>Teacher</span>
        </Link>
      </div>

      <div> 
        <Link to="/admin-signup" style={{ textDecoration: 'none' }}>
          <Avatar size="lg" sx={{ width: 80, height: 80 }} /> 
          <span style={{ color: 'white' }}>Admin</span>
        </Link>
      </div>

    </Box>


     
    
    
  );
}
