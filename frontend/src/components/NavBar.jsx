import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx= {{width: '100%'}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        </Typography>
        <Button color="inherit">Training</Button>
        <Button color="inherit">Office Hours</Button>
        <Button color="inherit">Attendance</Button>
        <Button color="inherit">Modules</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;