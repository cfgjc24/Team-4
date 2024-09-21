import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import StudentSignIn from './pages/StudentSignIn';
import LogIn from './pages/LogIn';
import CreateAccount from './pages/CreateAccount';
import TutorSignIn from './pages/TutorSignIn';
import AdminDashboard from './pages/AdminDashboard';
import TutorDashboard from './pages/TutorDashboard';
import CourseMaterials from './components/CourseMaterials';
import StudentDashboard from './pages/StudentDashboard';
import WeekProgressTable from './components/WeekProgressTable';
import Attendance from './pages/Attendance';
import TeacherSignIn from './pages/TeacherSignIn';
import AdminSignIn from './pages/AdminSignIn';
import Contact from './components/ContactUs';
import OfficeHours from './pages/Office'
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn/>} /> 
          {/* <Route path="/" element={<StudentSignIn/>} /> */}
          {/* <Route path = "/tutor-home-page" element={<ButtonAppBar/>} />  */}

          <Route path="/create-account" element={<CreateAccount/>} />  

          <Route path="/student-signup" element={<StudentSignIn/>} /> 
          <Route path = "/tutor-signup" element={<TutorSignIn/>} />
          <Route path = "/teacher-signup" element={<TeacherSignIn/>} /> 
          <Route path = "/admin-signup" element={<AdminSignIn/>} /> 
          <Route path = "/student-dashboard" element={<StudentDashboard/>} />
          <Route path = "/tutor-dashboard" element={<TutorDashboard/>} /> 
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/course-materials" element={<CourseMaterials />} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/office-hours" element={<OfficeHours/>} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
