import React from 'react'
import './Home.css'

const Contents = ({details}) => {
  return ( 
  <>

       <div className='containe'>
        <nav className='navBar'><h1>Dashboard</h1></nav>
    <div className='contents'>{details}</div>
    </div>
  </>
  )
}

export default Contents