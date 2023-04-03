import { useCallback, useEffect, useState } from 'react'
import { getPhotos } from '../services/albumsService'

export default function useAlbumDitails(id) {
    const [album, setAlbum] = useState([])

    const fetchAlbum = useCallback(() => {
        getPhotos(id).then(data => setAlbum(data))
    }, [id, setAlbum])

    useEffect(() => {
        fetchAlbum()
    }, [id, fetchAlbum])

    return { album, fetchAlbum }
}
