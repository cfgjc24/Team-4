import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#99B1BD', padding: '20px', color: 'white', marginTop: 'auto', textAlign: 'center' }}>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
      
        <Grid item xs={12} md={6}>
          <Typography variant="h6">FIRST GENERATION INVESTORS</Typography>
          <Typography>
            Mailing Address: 48 Wall Street, Suite 1100 <br />
            New York, New York 10005
          </Typography>
          <Typography>
            <Link href="mailto:Contact@FirstGenerationInvestors.com" color="inherit" underline="none">
              Contact@FirstGenerationInvestors.com
            </Link>
          </Typography>
        </Grid>
       
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/path-to-your-image"
              alt="Platinum Transparency 2024"
              style={{ marginBottom: '20px' }}
            />
          </Box>
        </Grid>
      </Grid>
      {/* Social media icons */}
      <Box textAlign="center" mt={2}>
        <IconButton href="#" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton href="#" color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com/firstgeninvestors/?hl=en" color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton href="#" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="#" color="inherit">
          <YouTubeIcon />
        </IconButton>
      </Box>
      {/* Footer copyright text */}
      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
        © First Generation Investors. All rights reserved.
      </Typography>
    </Box>
  );
};
export default Footer;