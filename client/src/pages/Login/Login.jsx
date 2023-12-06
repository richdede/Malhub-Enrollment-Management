import { useState } from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import { loadConfigFromFile } from "vite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    if (res.status == true) {
      toast.success(res.message);
      const token = res.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", res.user.name);
      location.assign("/sidebar");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="REGLOG">
      <div className="Register">
        <div className="register_users">
          <h2>Sign up and start learning</h2>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button>Login</button>
          <span style={{ textAlign: "center", marginTop: "10px" }}>
            or <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
