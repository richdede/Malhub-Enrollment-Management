import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const Register = () => {
  const [formData, setFormData] = useState({
    
    user_type: "student",
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
    var errorMessage = "";
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        formData
      );
      console.log(response);
      // if (response.status === 200) {
      //   let token = response.data.token;
      //   localStorage.setItem("token", token);
      //   console.log(localStorage.getItem("token"));
      //   //set isAuthebticated = true;
      //   navigate("/dashboard"); // process redirection to dashboard;
      //   return null;
      // }
      window.location.href = "/dashboard";x

      //errorMessage = response.data.errors;
      //alert(response.data.errors);
    } catch (error) {
      console.error("Registration failed", errorMessage);
    }
  };

  return (
    <div className="REGLOG">
      <div className="Register">
        <div className="register_users">
          <h2>Sign up and start learning</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <label htmlFor="phone">Your Number</label>
          <input
            type="phone"
            placeholder="phone"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
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
