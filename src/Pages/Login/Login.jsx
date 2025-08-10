import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Get data from localStorage
    const storedData = JSON.parse(localStorage.getItem('user'));

    // ✅ Check if any user is stored
    if (!storedData) {
      alert("No user found. Please sign up first.");
      return;
    }

    // ✅ Check if email and password match
    if (
      userData.email === storedData.email &&
      userData.password === storedData.password
    ) {
      alert("Login successful!");
      navigate('/yoga-poses');
    } else {
      alert('Wrong credentials');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
