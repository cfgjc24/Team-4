import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

export default function BasicAvatars() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
    <div> 
    {/* <Link href = "/student-signup"> */}
    <Avatar size = "lg"></Avatar> 
    Student 
    {/* </Link> */}
    </div>

    <div> 
    {/* <Link href = "/tutor-signup"> */}
    <Avatar size = "lg"></Avatar> 
    Tutor 
    {/* </Link> */}
    </div>

    <div> 
    {/* <Link href = "/teacher-signup"> */}
    <Avatar size = "lg"></Avatar> 
    Teacher 
    {/* </Link> */}
    </div>


    <div> 
    {/* <Link href = "/teacher-signup"> */}
    <Avatar size = "lg"></Avatar> 
    Admin 
    {/* </Link> */}
    </div>
    
    </Box>
  );
}