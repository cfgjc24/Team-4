import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from '@mui/material/styles';

export default function AMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Styled Menu
  const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
      backgroundColor: '#ffffff',  
      color: '#333333',            
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  
      borderRadius: '10px',       
      padding: theme.spacing(1),
    },
  }));

  // Styled MenuItem
  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    '&:hover': {
      backgroundColor: '#f0f0f0', 
    },
    padding: theme.spacing(1.5), 
    fontWeight: 'bold',          
    fontSize: '16px',            
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#67b0e8',
    color: '#ffffff',
    fontWeight: 'bold',           
    padding: theme.spacing(1.5), 
    '&:hover': {
      backgroundColor: '#115293',
    },
  }));

  return (
    <div>
      <StyledButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </StyledButton>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <StyledMenuItem onClick={handleClose}>Completion Rate</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Enrollment Rate</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Affiliated High Schools</StyledMenuItem>
      </StyledMenu>
    </div>
  );
}