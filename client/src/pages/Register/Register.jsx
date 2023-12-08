import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
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
      if (response.data.status) {
        toast.success("Registration successful", errorMessage);
        let token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/login");
      } else {
        alert("Error registering user");
      }
    } catch (error) {
      toast.error("Registration failed, Check your credentials and try again.",errorMessage);
    }
  };

  return (
    <div className="REGLOG">
      <div className="Register">
        <div className="register_users">
          <h2>Sign up and start learning</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user_type"></label>
          <select name="user_type" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="workspace_user">Workspace User</option>
          </select>
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
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            type="password"
            placeholder="password_confirmation"
            id="password_confirmation"
            onChange={handleChange}
            name="password_confirmation"
            value={formData.password_confirmation}
            required
          />
          <button type="submit">Register Now</button>
          <span style={{ textAlign: "center", marginTop: "10px" }}>
            or <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
