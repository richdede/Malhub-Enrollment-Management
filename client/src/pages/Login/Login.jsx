import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        {
          email,
          password,
        }
      );
      data;
      console.log(response);
      toast.success("Login successful");
      navigate("/sidebar");
      const token = response.data.token;
      localStorage.setItem("token", token);
      const newUser = response.data.user.name;
      localStorage.setItem("user", newUser);
      localStorage.setItem("userData", response.data.user);
      localStorage.setItem("userId", response.data.user.id);
    } catch (error) {
      toast.error("Login failed, Check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="REGLOG">
      <div className="Register">
        <div className="register_users">
          <h2>Sign up and start learning</h2>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: "email is required" })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", { required: "password is required" })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button type="submit" disabled={loading}>
            Login Now
          </button>
          <span style={{ textAlign: "center", marginTop: "10px" }}>
            or <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
