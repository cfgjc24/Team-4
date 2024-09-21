import React from 'react';
import Navbar from '../components/NavBar';
import WeekProgressTable from '../components/WeekProgressTable';
function Attendance() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ paddingTop: '64px' }}>
        <h1>Progress Tracker</h1>
        <WeekProgressTable/>
      </div>
    </div>
  );
}
export default Attendance;