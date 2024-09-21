import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import './App.css'
import StudentSignIn from './pages/StudentSignIn';
import './index.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/StudentSignIn" element={<StudentSignIn/>} />
         {/* <Route path="/" element={<CreateAccount/>} />  */}
          {/* <Route path="/student-signup" element={<StudentSignIn/>} />  */}
          {/* <Route path = "/tutor-signup" element={<TutorSignIn/>} />
          <Route path = "/teacher-signup" element={<TeacherSignIn/>} />
          <Route path = "/admin-signup" element={<AdminSignIn/>} />
          <Route path = "/student-dashboard" element={<StudentDashboard/>} />
          <Route path = "/tutor-dashboard" element={<TutorDashboard/>} /> */
          <Route path = "/AdminDashboard" element={<AdminDashboard/>} /> }
         </Routes>
      </Router>
    </>
  )
}

export default App;
