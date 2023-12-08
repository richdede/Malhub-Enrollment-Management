import React from 'react'
import './Home.css'
// import Welcome from "../components/Dashboard/Welcome";

const Contents = ({details}) => {
  return ( 
  <>


        {/* <Welcome/> */}
       {/* <h1>welcome</h1> */}
       <div className='container'>
    <div className='contents'>{details}</div>
    </div>
  </>
  )
}

export default Contents