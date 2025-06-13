import React, { useState } from 'react';
import { loginUser } from '../api/auth';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      localStorage.setItem('user', JSON.stringify(data));
      window.location.href = '/dashboard';
    } catch (err) {
      alert(err.response.data.msg || 'Login failed');
    }
  };

  return (
    <div className="main-container">
      <h2 className="heading">Login to access your brokeness!</h2>
      <form onSubmit={handleSubmit}>
        <input className="input" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="input" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
