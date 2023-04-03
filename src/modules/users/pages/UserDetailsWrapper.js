import React from 'react'
import UserProvider from '../provider/UserProvider'
import UserDetails from '../pages/UserDetails'

export default function UserDetailsWrapper() {
    return (
        <>
            <UserProvider><UserDetails /></UserProvider>
        </>
    )
}
