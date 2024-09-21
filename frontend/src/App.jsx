import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css'
import StudentSignIn from './pages/StudentSignIn';
import LogIn from './pages/LogIn';
import CreateAccount from './pages/CreateAccount';
import TutorSignIn from './pages/TutorSignIn';
import ButtonAppBar from './pages/TutorHomePage';
import AdminDashboard from './pages/AdminDashboard';
import CourseMaterials from './pages/CourseMaterials';
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<StudentSignIn/>} />
            <Route path = "/tutor-home-page" element={<ButtonAppBar/>} />
         {/* <Route path="/create-account" element={<CreateAccount/>} />  */}
          {/* <Route path="/student-signup" element={<StudentSignIn/>} />  */}
           {/* <Route path = "/tutor-signup" element={<TutorSignIn/>} /> */}
          <Route path="/" element={<LogIn/>} /> 

         {/* <Route path = "/teacher-signup" element={<TeacherSignIn/>} />
          <Route path = "/admin-signup" element={<AdminSignIn/>} />
          <Route path = "/student-dashboard" element={<StudentDashboard/>} />
          <Route path = "/tutor-dashboard" element={<TutorDashboard/>} /> */}
          <Route path="/CourseMaterials" element={<CourseMaterials/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/CourseMaterials" element={<CourseMaterials />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
