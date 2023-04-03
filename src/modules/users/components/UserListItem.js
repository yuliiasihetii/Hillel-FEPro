import React from 'react'
import { Link } from 'react-router-dom'
export default function UserListItem({ user }) {
    return (
        <li>
            <Link to={String(user.id)}>{user.name}</Link>
        </li>
    )
}
