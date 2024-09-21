import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import StudentSignIn from './pages/StudentSignIn';
import TutorSignIn from './pages/TutorSignIn';
import TeacherSignIn from './pages/TeacherSignIn';


function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<StudentSignIn/>} />
         {/* <Route path="/create-account" element={<CreateAccount/>} />  */}
          {/* <Route path="/student-signup" element={<StudentSignIn/>} />  */}
           <Route path = "/tutor-signup" element={<TutorSignIn/>} />
         <Route path = "/teacher-signup" element={<TeacherSignIn/>} />
         {/* <Route path = "/admin-signup" element={<AdminSignIn/>} />
          <Route path = "/student-dashboard" element={<StudentDashboard/>} />
          <Route path = "/tutor-dashboard" element={<TutorDashboard/>} />
          <Route path = "/admin-dashboard" element={<AdminDashboard/>} />  */}

         
         </Routes>
      </Router>
    </>
  )
}

export default App
