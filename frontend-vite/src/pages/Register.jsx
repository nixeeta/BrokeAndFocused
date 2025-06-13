import React, { useState } from 'react';
import { registerUser } from '../api/auth';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(form);
      localStorage.setItem('user', JSON.stringify(data));
      window.location.href = '/dashboard';
    } catch (err) {
      alert(err.response.data.msg || 'Registration failed');
    }
  };

  return (
    <div className="main-container">
      <h2 className="heading">First time being broke? Don't you worry, We got you!</h2>
      <form onSubmit={handleSubmit}>
        <input className="input" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="input" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="input" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
