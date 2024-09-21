import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx= {{width: '100%'}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        </Typography>
        {/* <Button color="inherit">Training</Button> */}

        <Link to="/office-hours">
        <Button style={{ color: 'white' }}color="inherit">Office Hours</Button>
        </Link>

        <Link to="/attendance">
        <Button style={{ color: 'white' }}> Attendance</Button>
        </Link>

        <Link to="/course-materials">
        <Button style={{ color: 'white' }}> Modules</Button>
        </Link>

        {/* <Link to="/class-schedule">
        <Button style={{ color: 'white' }}> Class Schedule</Button>
        </Link> */}

        <Button color="inherit" onClick={() => window.location.href = 'mailto:your-email@example.com'}
      >
        Contact
      </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;