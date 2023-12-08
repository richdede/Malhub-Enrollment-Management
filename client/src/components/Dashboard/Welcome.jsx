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
           <h2 >My Dashboard</h2>
           {user && <p className="welcomeP">Welcome {user} </p>}
         </div>
)
}
export default Welcome;