import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='container'>
            <Link to='/' className='header'><h2 >Album List</h2></Link>
            <Outlet />
        </div>
    )
}
