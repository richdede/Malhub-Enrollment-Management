import React from 'react'
import './Home.css'
// import Welcome from "../components/Dashboard/Welcome";

const Contents = ({details}) => {
  return ( 
  <>


        {/* <Welcome/> */}
       {/* <h1>welcome</h1> */}

       <div className='containe'>
        <nav className='navBar'><h1>Dashboard</h1></nav>
    <div className='contents'>{details}</div>
    </div>
  </>
  )
}

export default Contents