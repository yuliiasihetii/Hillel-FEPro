import React from 'react'
import UserList from '../components/UserList'
import { useUsersList } from '../hooks/useUsersList'

export default function UserListPage() {
    const { list } = useUsersList()
    return (
        <>
            <h4>Users list:</h4>
            <UserList list={list} />
        </>
    )
}
