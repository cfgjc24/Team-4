// import React from 'react';
// import AMenu from '../components/Menu';
// import CourseMaterials from '../components/CourseMaterials';
// import Navbar from '../components/NavBar';

// function AdminDashboard() {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <div style={{ paddingTop: '64px' }}>
//         <h1>Welcome, Admins!</h1>
//         <AMenu />
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import React from 'react';
import Navbar from '../components/NavBar';
import AMenu from '../components/Menu';
import CourseMaterials from '../components/CourseMaterials';
import './AdminDashboard.css'; // Import the CSS file for styles

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <header className="header-section">
        <div className="header-content container">
          <h1>Admin Home Page</h1>
          <p>First Generation Investors</p>
          <button className="donate-button">Dashboard</button>
        </div>
      </header>

      <main className="main-content">
        {/* Mission Section Container */}
        <section className="mission-section container">
          <h2>Student Statistics</h2>
          <p>
            First Generation Investors (FGI) resources serve a wide variety of students of different backgrounds.
          </p>
          <div className="impact-stat">
            <span>More than</span>
            <h1>73%</h1>
            <span>of students are minority.</span>
          </div>
          <div className="impact-stat">
            <span>Over</span>
            <h1>9 in 10</h1>
            <span>enrolled students complete the course.</span>
          </div>
        </section>

        {/* Course Materials Section Container */}
        <section className="course-materials-section container">
          <h2>Curriculum</h2>
          <AMenu />
          <CourseMaterials />
        </section>

        {/* Capstone Project Section Container */}
        <section className="capstone-section container">
          <h2>CAPSTONE PROJECT</h2>
          <p>Submit your capstone project to showcase what you've learned throughout your experience in the FGI program.</p>
          <div className="capstone-instructions">
            <div className="instruction-card">
              <h3>CAPSTONE INSTRUCTIONS</h3>
              {/* <img src="instruction-image-url" alt="Capstone Instructions" /> */}
            </div>
            <div className="instruction-card">
              <h3>SUBMISSION INSTRUCTIONS</h3>
              {/* <img src="submission-image-url" alt="Submission Instructions" /> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
