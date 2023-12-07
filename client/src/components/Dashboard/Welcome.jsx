import React from "react";
import { useEffect, useState } from "react";


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
           <h1>My Dashboard</h1>
           {user && <p>welcome {user} </p>}
         </div>
)
}
export default Welcome;