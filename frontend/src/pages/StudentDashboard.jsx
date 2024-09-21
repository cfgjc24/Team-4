import React from 'react';
import CourseMaterials from '../components/CourseMaterials';
import Navbar from '../components/NavBar';
import ProgressBar from '../components/ProgressBar';
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { School, InsertDriveFile } from '@mui/icons-material'; // Import Material UI icons

function StudentDashboard() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f0f4f8, #99cfe0)', // Lighter gradient for modern feel
      minHeight: '100vh',
      color: '#333333' // Darker text for better readability
    }}>
      <Navbar />
      
      {/* Use Box for layout control */}
      <Box sx={{ paddingTop: '64px', textAlign: 'center' }}>
        {/* Animated Progress Bar */}
        <ProgressBar style={{ marginBottom: '30px' }} />
        
        {/* Welcome Message */}
        <Typography 
          variant="h2" 
          sx={{
            fontFamily: 'Poppins, sans-serif', // Changed font to Poppins for modern look
            fontWeight: '700', 
            letterSpacing: '1px', 
            lineHeight: '1.2',
            color: '#002244', // Darker blue for text
            marginBottom: '20px'
          }}
        >
          Welcome, Students!
        </Typography>

        {/* Subheading */}
        <Typography 
          variant="h5" 
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '400',
            color: '#444444', // Medium grey subheading
            marginBottom: '40px',
          }}
        >
          Access your course materials and track your progress.
        </Typography>

        {/* Container to constrain width and center content */}
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Loop through Course Materials */}
            {[...Array(6)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{
                  background: '#ffffff', // White background for cleaner look
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Softer shadow for subtle effect
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)', // Slightly enlarges on hover
                    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.15)' // Increased shadow on hover
                  },
                  padding: '20px',
                  textAlign: 'left' // Align text to left
                }}>
                  <CardContent>
                    {/* Adding an icon at the top */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <School sx={{ fontSize: '40px', color: '#0077b6', marginRight: '15px' }} /> {/* School icon */}
                      <Typography 
                        variant="h6" 
                        sx={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: '600',
                          color: '#002244'
                        }}
                      >
                        Lesson {index + 1}: Sample Lesson Title
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '300',
                        color: '#666666' // Lighter grey for the body text
                      }}
                    >
                      Brief description of the lesson content...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default StudentDashboard;
