
import React from 'react'
import './Home.css'
import { Link, NavLink } from 'react-router-dom';
const image = "/Malhub-logo.png";

const Sides = () => {
  const sides = [
    {
      id: 1,
      name: "Dashboard",
      path: "/sidebar/welcome",
      icon: "../../Public/dashboards.png",
    },
    {
      id: 2,
      name: "courses",
      path: "/sidebar/courses",
      icon: "../../Public/homework.png",
    },
    {
      id: 3,
      name: "workspace",
      path: "/sidebar/workspace",
      icon: "../../Public/workplace.png",
    },
    {
      id: 4,
      name: "payment history",
      path: "/sidebar/payment",
      icon: "../../Public/transaction-history.png",
    },
    {
      id: 5,
      name: "Logout",
      path: "/",
      icon: "../../Public/icons8-logout-rounded-50.png",
    }
  ];


    return (
        <div className='sides'>
                <NavLink to= "/"><img className='imag' src={image} alt="logo" style={{ maxWidth: "120px" }} /></NavLink>
            <hr />
            <div className="sidelists">

                {

                    sides.map((item) => (
                        <NavLink className='list' to={item.path} key={item.id}>
                            <img  className='icons'  src={item.icon} alt="" />
                            <p>{item.name}</p>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Sides
