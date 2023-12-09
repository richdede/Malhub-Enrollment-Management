import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
const logo = "Malhub-logo.png";
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
      navigate("/sidebar/welcome");
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
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", paddingTop: "30px" }}
          />
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <span>
            <MdAlternateEmail
              style={{ position: "relative", left: "16px", top: "33px" }}
            />
            <input
              {...register("email", { required: "email is required" })}
              value={email}
              placeholder="Email Addrss"
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: "12px" }}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </span>
          <span>
            <RiLockPasswordFill
              style={{ position: "relative", left: "16px", top: "33px" }}
            />
            <input
              type="password"
              {...register("password", { required: "password is required" })}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="User Password"
              style={{ marginLeft: "12px" }}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </span>
          <button
            type="submit"
            disabled={loading}
            style={{
              marginLeft: "12px",
            }}
          >
            Login Now
          </button>
          <span style={{ marginTop: "15px", marginLeft: "200px" }}>
            Or <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
