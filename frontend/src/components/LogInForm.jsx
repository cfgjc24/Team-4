import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate, Link } from 'react-router-dom';


const LogInForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data submitted:', formData);

    // Add auth here
    // window.location.href = '/teacher-signup'; // Redirect to teacher-signup page after login
    
    setFormData({ username: '', password: '' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Header />
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '15px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '75%', padding: '10px', borderRadius: '10px', border: '1px solid #ccc' }}

          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '75%', padding: '10px', borderRadius: '10px', border: '1px solid #ccc' }}

          />
        </div>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Login
        </button>

      {/* IF TIME PERMITS: Add functionality for this */}
        <div style={{ marginTop: '15px', marginRight: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#007bff', cursor: 'pointer' }}>Forgot Password?</span>

          <Link to = "/create-account">
          <span style={{ color: '#007bff', cursor: 'pointer' }}>Create Account</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
