import React from 'react';
import AMenu from '../components/Menu';
import CourseMaterials from '../components/CourseMaterials';
import Navbar from '../components/NavBar';

function AdminDashboard() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ paddingTop: '64px' }}>
        <h1>Welcome, Admins!</h1>
        <AMenu />
      </div>
    </div>
  );
}

export default AdminDashboard;
