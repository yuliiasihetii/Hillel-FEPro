import { useContext } from 'react'
import { UserContext } from '../provider/UserProvider'

export default function useUser() {
    return useContext(UserContext)
}