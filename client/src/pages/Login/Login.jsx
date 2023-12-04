import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      //api enpoint for login
      const response = await axios.post("/api/login", { name, email });
      //api token for login
      const token = response.data.token;

      window.location.href = "/dashboard";
    } catch (error) {
      setError("Invalid email or name");
    }
  };
  return (
    <div className="REGLOG">
      <div className="Register">
        <div className="register_users">
          <h2>Sign up and start learning</h2>
        </div>
        <form>
          <label htmlFor="name">username</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">user email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" onClick={handleLogin}>
            Login Now
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
