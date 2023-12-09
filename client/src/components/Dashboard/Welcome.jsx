import React from "react";
import { useEffect, useState } from "react";
import './Dashboard.css'
const Welcome = () => {

const [user, setUser] = useState(null)
useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) location.assign("/login");
  setUser(localStorage.getItem('user'))
}, []);
return (
<div>
           <h3 >My Dashboard</h3>
           {user && <p className="welcomeP">Welcome, <strong>{user}</strong> </p>}
         </div>
)
}
export default Welcome;