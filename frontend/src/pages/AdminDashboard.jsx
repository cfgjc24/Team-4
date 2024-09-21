import React from 'react';
import AMenu from '../components/Menu';
import ButtonAppBar from '../components/header';

function AdminDashboard() {
  return (
    <div>
      <ButtonAppBar />
      <div style={{ paddingTop: '64px' }}>
        <h1>Welcome, Admins!</h1>
        <AMenu />
      </div>
    </div>
  );
}

export default AdminDashboard;
