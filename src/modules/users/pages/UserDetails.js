import React from 'react'
import useUser from '../hooks/useUser'
import { Outlet } from 'react-router-dom'

export default function UserDetails() {
    const user = useUser()
    return (
        <>
            <h3>User details</h3>
            {user.name}
            <Outlet />
        </>
    )
}
