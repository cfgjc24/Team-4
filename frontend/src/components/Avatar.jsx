import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

export default function BasicAvatars() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
    <div> 
    <Avatar size = "lg"></Avatar> 
    Student 
    </div>

    <div> 
    <Avatar size = "lg"></Avatar> 
    Tutor 
    </div>

    <div> 
    <Avatar size = "lg"></Avatar> 
    Teacher 
    </div>


    <div> 
    <Avatar size = "lg"></Avatar> 
    Admin 
    </div>
    
    </Box>
  );
}