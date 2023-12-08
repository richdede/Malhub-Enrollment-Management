import React from "react";
import { useEffect, useState } from "react";
import './Dashboard.css'

// const Header = () => {
//     return (
//         <header>
//             <h1>welcome </h1>
//         </header>
//     );
// };
// export default Header;div>
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
           {/* <p className="welcomeP">Welcome</p> */}
           {user && <p className="welcomeP">Welcome {user} </p>}
         </div>
)
}
export default Welcome;