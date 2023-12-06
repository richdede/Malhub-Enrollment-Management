import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const logo = "Malhub-logo.png";
const dashboardLogo = "dashboards.png";
const courseLogo = "homework.png";
const workspaceLogo = "workplace.png";
const paymentLogo = "transaction-history.png";
const Sidebar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) location.assign("/login");
    setUser(localStorage.getItem("user"));
  }, []);

  return (
    <>
      <div className="container">
        <nav className="sidebar">
          <img src={logo} alt="logo" style={{ maxWidth: "30%" }} />
          {/* <p>welcome </p> */}

          <ul className="dashboardUl">
            <li className="dashboardLI">
              <img src={dashboardLogo} alt="logo" className="logo" />
              dashbord
            </li>
            <li className="dashboardLI">
              <img src={courseLogo} alt="logo" className="logo" />
              Courses
            </li>
            <li className="dashboardLI">
              <img src={workspaceLogo} alt="logo" className="logo" />
              workspaces
            </li>
            <li className="dashboardLI">
              {" "}
              <img src={paymentLogo} alt="logo" className="logo" />
              payment history
            </li>
          </ul>
        </nav>
        <div>
          <h1>My Dashboard</h1>
          {user && <p>welcome {user} </p>}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
