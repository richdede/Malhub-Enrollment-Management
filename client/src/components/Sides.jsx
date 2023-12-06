import React from 'react'
import './Home.css'
import { Link, NavLink } from 'react-router-dom'

const Sides = () => {

    const sides = [
        {
            id: 1,
            name: 'courses',
            path: 'courses',
            icon: '../../Public/homework.png'
        },
        {
            id: 2,
            name: 'workspace',
            path: 'workspace',
            icon: '../../Public/workplace.png'
        },
        {
            id: 3,
            name: 'payment history',
            path: 'payment',
            icon: '../../Public/transaction-history.png'
        }
    ]

  return (
    <div className='sides'>
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