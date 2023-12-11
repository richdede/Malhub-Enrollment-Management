import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
// import { MdAutofpsSelect } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
const logo = "Malhub-logo.png";

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
      toast.error(
        "Registration failed, Check your credentials and try again.",
        errorMessage
      );
    }
  };

  return (
    <div className="REGLOG">
      <div className="log">
        <Link to="/" style={{ color: "white", fontSize: "20px"  }}>
          <FaHome style={{ color: "white", fontSize: "20px"  }} />
          Back to Home
        </Link>
      </div>
      <div className="Register">
        <div className="register_users">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "100px", paddingTop: "20px" }}
            />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <span>
            <FaRegUser
              style={{
                position: "relative",
                left: "10px",
                top: "62px",
                // color: "white",
              }}
            />
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              placeholder="your name"
              style={{ paddingLeft: "30px", marginTop: "30px" }}
            />
          </span>
          {/* <label htmlFor="phone">Your Number</label> */}
          <span>
            <FaPhoneVolume
              style={{ position: "relative", left: "10px", top: "35px" }}
            />

            <input
              type="phone"
              placeholder="phone"
              style={{ paddingLeft: "30px" }}
              id="phone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              required
            />
          </span>
          {/* <label htmlFor="address">Your Address</label> */}
          <span>
            <FaAddressBook
              style={{ position: "relative", left: "10px", top: "35px" }}
            />
            <input
              type="address"
              placeholder="address"
              style={{ paddingLeft: "30px" }}
              id="address"
              name="address"
              onChange={handleChange}
              value={formData.address}
              required
            />
          </span>{" "}
          {/* <label htmlFor="email">Your Email</label> */}
          <span>
            <MdAlternateEmail
              style={{ position: "relative", left: "10px", top: "35px" }}
            />
            <input
              type="email"
              placeholder="email"
              style={{ paddingLeft: "30px" }}
              id="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              required
            />
          </span>
          <span>
            <RiLockPasswordFill
              style={{ position: "relative", left: "10px", top: "35px" }}
            />
            {/* <label htmlFor="password">Your Password</label> */}
            <input
              type="password"
              placeholder="password"
              style={{ paddingLeft: "30px" }}
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </span>
          {/* <label htmlFor="password_confirmation">Confirm Password</label> */}
          <span>
            <GiConfirmed
              style={{ position: "relative", left: "10px", top: "35px" }}
            />
            <input
              type="password"
              placeholder="password_confirmation"
              style={{ paddingLeft: "30px" }}
              id="password_confirmation"
              onChange={handleChange}
              name="password_confirmation"
              value={formData.password_confirmation}
              required
            />
            <div className="custom-sellect">
              <select
                name="user_type"
                onChange={handleChange}
                required
                id="style"
              >
                <option>Select</option>
                <option value="student">Student</option>
                <option value="workspace_user">Workspace User</option>
              </select>
            </div>
            <button type="submit" className="sub">
              Register Now
            </button>
            <span style={{ marginTop: "15px", marginLeft: "200px" }}>
              Or <Link to="/login">Login?</Link>
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;