import React from 'react';
import CourseMaterials from '../components/CourseMaterials';
import Navbar from '../components/NavBar';

function TutorDashboard() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ paddingTop: '5px' }}>
        <h1>Welcome, Educators!</h1>
        <CourseMaterials/>
      </div>
    </div>
  );
}

export default TutorDashboard;
