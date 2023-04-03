import { useCallback, useState, useEffect } from 'react'
import useUser from '../../users/hooks/useUser'
import { getAlbums } from '../services/albumsService'


export default function useAlbumsList() {
    const [list, setList] = useState([])

    const user = useUser()

    const fetchList = useCallback(
        () => {
            getAlbums(user.id).then(setList)
        },
        [setList, user.id],
    )

    useEffect(() => {
        fetchList()

    }, [fetchList])


    return { list, fetchList }
}