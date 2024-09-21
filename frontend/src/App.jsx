import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import StudentSignIn from './pages/StudentSignIn';
import CourseMaterials from './pages/CourseMaterials'; // Make sure to import this
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StudentSignIn />} /> {/* Default route */}
          <Route path="/StudentSignIn" element={<StudentSignIn />} />
          {/* <Route path="/" element={<CreateAccount/>} />  */}
          {/* <Route path="/student-signup" element={<StudentSignIn/>} />  */}
          {/* <Route path = "/tutor-signup" element={<TutorSignIn/>} />
          <Route path = "/teacher-signup" element={<TeacherSignIn/>} />
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
