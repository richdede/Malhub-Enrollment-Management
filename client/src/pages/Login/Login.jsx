import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import { loadConfigFromFile } from "vite";

const Login = () => {
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
        data
      );
      console.log(response);
      toast.success("Login successful");
      navigate("/sidebar");
      const token = response.data.token
      localStorage.setItem('token', token)
      const newUser = response.data.user.name
      localStorage.setItem('user', newUser)
    } catch (error) {
      console.error(error.response.data);
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
          <label htmlFor="email">user email</label>
          <input {...register("email", { required: "email is required" })} />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", { required: "password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button type="submit" disabled={loading}>
            Login Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
