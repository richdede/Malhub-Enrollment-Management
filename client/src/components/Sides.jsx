import React from 'react'
import './Home.css'
import { Link, NavLink } from 'react-router-dom';
const image = "Malhub-logo.png";

const Sides = () => {

    const sides = [
        {
            id: 1,
            name: 'Welcome',
            path: '/sidebar/welcome',
            icon: '../../Public/dashboards.png'
        },
        {
            id: 2,
            name: 'Courses',
            path: '/sidebar/courses',
            icon: '../../Public/homework.png'
        },
        {
            id: 3,
            name: 'Workspace',
            path: '/sidebar/workspace',
            icon: '../../Public/workplace.png'
        },
        {
            id: 4,
            name: 'Payment',
            path: 'payment',
            icon: '../../Public/transaction-history.png'
        }
    ]

    return (
        <div className='sides'>
                <img className='imag' src={image} alt="logo" style={{ maxWidth: "150px" }} />

            <div className="sidelists">

                {

                    sides.map((item) => (
                        <NavLink className='list' to={item.path} key={item.id}>
                            <img src={item.icon} alt="" />
                            <p>{item.name}</p>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Sides