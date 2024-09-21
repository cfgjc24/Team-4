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
      backgroundColor: '#ffffff',  // White background
      color: '#333333',            // Dark text color
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',  // Shadow for prominence
      borderRadius: '10px',        // Rounded corners
      padding: theme.spacing(1),
    },
  }));

  // Styled MenuItem
  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    '&:hover': {
      backgroundColor: '#f0f0f0', // Light gray hover effect
    },
    padding: theme.spacing(1.5), // Extra padding for menu items
    fontWeight: 'bold',          // Bold text for visibility
    fontSize: '16px',            // Larger font size for emphasis
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#67b0e8',
    color: '#ffffff',
    fontWeight: 'bold',           
    padding: theme.spacing(1.5), 
    '&:hover': {
      backgroundColor: '#115293', // Darker blue on hover
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