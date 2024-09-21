import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css'
import StudentSignIn from './pages/StudentSignIn';
import LogIn from './pages/LogIn';
import CreateAccount from './pages/CreateAccount';


function App() {

  return (
    <>
      <Router>
        <Routes>

            {/* <Route path="/" element={<StudentSignIn/>} /> */}
          <Route path="/" element={<CreateAccount/>} /> 
          {/* <Route path="/student-signup" element={<StudentSignIn/>} />  */}
          {/* <Route path = "/tutor-signup" element={<TutorSignIn/>} />
          <Route path = "/teacher-signup" element={<TeacherSignIn/>} />
          <Route path = "/admin-signup" element={<AdminSignIn/>} />
          <Route path = "/student-dashboard" element={<StudentDashboard/>} />
          <Route path = "/tutor-dashboard" element={<TutorDashboard/>} />
          <Route path = "/admin-dashboard" element={<AdminDashboard/>} />  */}

         
         </Routes>
      </Router>
    </>
  )
}

export default App
