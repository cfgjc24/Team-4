import React from 'react';
import slides from '../../presentations/2what_is_a_stock.pdf'
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../components/NavBar';
import { Button } from '@mui/material';


export default function Slides () {
  const location = useLocation();
  const data = location.state;

  const navigate = useNavigate();

  const handleNavigation = (lesson) => {
      const dataToPass = { message: lesson};
      navigate('../Quiz', { state: dataToPass });
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1>{data.message.title}</h1>
      <iframe
          src={slides}
          width="100%"
            height="400"
            allowFullScreen
            style={{ border: 'none' }}
      ></iframe>
      <Button style={{
        backgroundColor: 'white',
        border: 'none',
        color: 'blue',
        padding: '15px 32px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '8px'}}
        onClick={() => handleNavigation(data.message.title)} > To Quiz </Button>
    </div>
  );
};

