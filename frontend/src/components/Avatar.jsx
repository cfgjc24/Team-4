import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import { Typography } from '@mui/material';

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

    </Box>


     
    
    
  );
}