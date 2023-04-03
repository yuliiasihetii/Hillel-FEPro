import { createContext } from 'react'
import { useParams } from 'react-router-dom'
import { useUserDetails } from '../hooks/useUserDetails'

export const UserContext = createContext(null)

export default function UserProvider({ children }) {
    const { id } = useParams()
    const { user } = useUserDetails(id)
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
