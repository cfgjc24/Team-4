import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import { Link } from 'react-router-dom';

export default function BasicAvatars() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
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