import { useState, useCallback, useEffect } from 'react'
import { getDetails } from '../services/userService'

export function useUserDetails(id) {
    const [user, setUser] = useState({})

    const fetchUser = useCallback(() => {
        getDetails(id).then(data => setUser(data))
    }, [id, setUser])

    useEffect(() => {
        fetchUser()
    }, [id, fetchUser])

    return { user, fetchUser }
}
