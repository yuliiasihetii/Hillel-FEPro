import { useState, useCallback, useEffect } from 'react'
import { getList } from '../services/userService'
export function useUsersList() {
    const [list, setList] = useState([])

    const fetchList = useCallback(
        () => {
            getList().then(setList)
        },
        [setList],
    )

    useEffect(() => {
        fetchList()

    }, [fetchList])


    return { list, fetchList }
}