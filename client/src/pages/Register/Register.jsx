import { useState } from "react";
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
    <div className="Register">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          placeholder="name"
          id="name"
          onChange={handleChange}
          value={formData.value}
          required
        />
        <label htmlFor="phone"></label>
        <input
          type="phone"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          value={formData.value}
          required
        />
        <label htmlFor="address"></label>
        <input
          type="address"
          placeholder="address"
          id="address"
          onChange={handleChange}
          required
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          name="email"
          value={formData.value}
          required
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          required
        />
        <label htmlFor="password_confirmation"></label>
        <input
          type="password_confirmation"
          placeholder="password_confirmation"
          id="password_confirmation"
          onChange={handleChange}
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;
