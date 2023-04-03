import React from 'react'
import UserListItem from './UserListItem'

export default function UserList({ list }) {
    return (
        <ul>
            {list.map((item) => <UserListItem user={item} key={item.id} />)}
        </ul>
    )
}
