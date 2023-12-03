import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.formDatabase]: e.target.value });
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
            name="username"
            onChange={handleChange}
            required
          />
          <label htmlFor="email">user email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            required
          />
          <button type="submit">Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
