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
            name: 'courses',
            path: '/sidebar/courses',
            icon: '../../Public/homework.png'
        },
        {
            id: 3,
            name: 'workspace',
            path: '/sidebar/workspace',
            icon: '../../Public/workplace.png'
        },
        {
            id: 4,
            name: 'payment history',
            path: 'payment',
            icon: '../../Public/transaction-history.png'
        }
    ]

    return (
        <div className='sides'>
            <div className="sidelists">
                <img src={image} alt="logo" style={{ maxWidth: "150px" }} />

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