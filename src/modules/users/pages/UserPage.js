import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function UserPage() {
    return (
        <div>
            <h2><Link to=''>User Menagement</Link></h2>
            <Outlet />
        </div>
    )
}
