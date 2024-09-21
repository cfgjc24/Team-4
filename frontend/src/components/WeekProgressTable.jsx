import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CheckIcon from '@mui/icons-material/Check';
import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import ProgressBar from '../components/ProgressBar';
import Footer from './Footer';



const HoverableCheckIcon = styled(CheckIcon)(({ theme }) => ({
  color: green[500],
  fontSize: '2rem',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.5)',
  },
}));
const WeekProgressTable = () => {
  const weeks = [
    { week: 'Week 1', completed: true },
    { week: 'Week 2', completed: true },
    { week: 'Week 3', completed: true },
    { week: 'Week 4', completed: true },
    { week: 'Week 5', completed: true },
    { week: 'Week 6', completed: true },
    { week: 'Week 7', completed: false },
    { week: 'Week 8', completed: false },
  ];
  return (
    <Box sx={{ textAlign: 'center', color: 'white', backgroundColor: '#041D5E', padding: '30px', minHeight: '100vh' }}>
      {/* Main heading */}
      <Typography variant="h4" gutterBottom sx={{ color: '#E1E8ED' }}>
        {/* Progress Tracker */}
      </Typography>
    
      <ProgressBar />
      {/* Subheading */}
      <Typography variant="subtitle1" sx={{ fontSize: '16px', marginBottom: '30px', color: '#A7C7E7' }}>
        Please remember that to graduate from the program, you must complete at least 6 out of the 8 weeks.
      </Typography>
      {/* Grid container for the weeks */}
      <Grid container spacing={2} justifyContent="center" wrap="nowrap" sx={{ overflowX: 'auto' }}>
        {weeks.map((week, index) => (
          <Grid item key={index} xs={12} sm={3} md={2}>
            <Box
              sx={{
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '20px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backgroundColor: index % 2 === 0 ? '#1F4E79' : '#2A6EBB',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '120px',
              }}
            >
              <Typography variant="h6">{week.week}</Typography>
              <Typography variant="h6" sx={{ color: '#F1F7FD' }}>{week.week}</Typography>
              {week.completed ? <HoverableCheckIcon /> : null}
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Attendance concern text */}
      <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: '#F1F7FD' }}>
          If you have concerns about attendance, click here:
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: '10px', backgroundColor: '#99b1bd' }} // Light blue color
          onClick={() => window.location.href = 'mailto:your-email@example.com'}
        >
          Contact
        </Button>
    

       
    <Box>
       {/* Horizontal Line */}
       <hr style={{ width: '100%', margin: '0 auto', borderColor: 'rgba(255, 255, 255, 0.3)' }} /> {/* Added line between button and footer */}

{/* Footer Component */}
<Footer />
    </Box>
      </Box>
    </Box>
  );
};
export default WeekProgressTable;