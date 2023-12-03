import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    user_type: "",
    name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="REGLOG">
      <div className="Register">
        <div className="register_users">
          <h2>Sign up and start learning</h2>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">username</label>
          <input
            type="text"
            placeholder="username"
            id="name"
            name="username"
            onChange={handleChange}
            value={formData.username}
            required
          />
          <label htmlFor="phone">Your Number</label>
          <input
            type="phone"
            placeholder="phone"
            id="phone"
            name="pone"
            onChange={handleChange}
            // value={formData.phone}
            required
          />
          <label htmlFor="address">Your Address</label>
          <input
            type="address"
            placeholder="address"
            id="address"
            name="address"
            onChange={handleChange}
            value={formData.address}
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            required
          />
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <label htmlFor="password_confirmation">Conform Password</label>
          <input
            type="password_confirmation"
            placeholder="password_confirmation"
            id="password_confirmation"
            onChange={handleChange}
            name="password_confirmation"
            value={formData.password_confirmation}
            required
          />
          <button type="submit">Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
