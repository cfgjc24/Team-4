import React, { useState } from 'react';
import Header from '../components/Header';

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

    // Resetting form after each submission
    // Window.href.location to individual homepages depending on user
    // window.location.href = '/teacher-signup'
    setFormData({ username: '', password: '' }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <Header/>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LogInForm;
