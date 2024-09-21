import React from 'react';
import CourseMaterials from '../components/CourseMaterials';
import Navbar from '../components/NavBar';
import ProgressBar from '../components/ProgressBar';

function StudentDashboard() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ paddingTop: '64px' }}>
      <ProgressBar></ProgressBar>
        <h1>Welcome, Students!</h1>
        <CourseMaterials/>
      </div>
    </div>
  );
}

export default StudentDashboard;
