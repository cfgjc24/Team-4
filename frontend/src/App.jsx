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
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
<<<<<<< HEAD
           
            <Route path = "/tutor-home-page" element={<ButtonAppBar/>} />
         {/* <Route path="/create-account" element={<CreateAccount/>} />  */}
          <Route path="/student-signup" element={<StudentSignIn/>} />  
           <Route path = "/tutor-signup" element={<TutorSignIn/>} /> 
=======
>>>>>>> a2d882abf8ac5dfb9acd1a0c066c813d51bb4ee0
          <Route path="/" element={<LogIn/>} /> 
          {/* <Route path="/" element={<StudentSignIn/>} /> */}
          {/* <Route path = "/tutor-home-page" element={<ButtonAppBar/>} />  */}

<<<<<<< HEAD
         <Route path = "/teacher-signup" element={<TeacherSignIn/>} />
          <Route path = "/admin-signup" element={<AdminSignIn/>} />
          {/* <Route path = "/student-dashboard" element={<StudentDashboard/>} />
          <Route path = "/tutor-dashboard" element={<TutorDashboard/>} />  */}
          <Route path="/CourseMaterials" element={<CourseMaterials/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/CourseMaterials" element={<CourseMaterials />} />
=======
          <Route path="/create-account" element={<CreateAccount/>} />  

          <Route path="/student-signup" element={<StudentSignIn/>} /> 
          <Route path = "/tutor-signup" element={<TutorSignIn/>} />
          {/* <Route path = "/teacher-signup" element={<TeacherSignIn/>} /> */}
          {/* <Route path = "/admin-signup" element={<AdminSignIn/>} /> */}
          <Route path = "/student-dashboard" element={<StudentDashboard/>} />
          <Route path = "/tutor-dashboard" element={<TutorDashboard/>} /> 
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/course-materials" element={<CourseMaterials />} />
>>>>>>> a2d882abf8ac5dfb9acd1a0c066c813d51bb4ee0
        </Routes>
      </Router>
    </>
  );
}

export default App;
