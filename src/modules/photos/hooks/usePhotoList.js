import { useState, useCallback, useEffect } from 'react'
import useAlbum from '../../albums/hooks/useAlbum'
import { getPhotoList } from '../services/photoService'

export default function usePhotoList() {
    const [photoList, setPhotoList] = useState([])

    const album = useAlbum()

    const fetchPhotoList = useCallback(() => {
        getPhotoList(album.id).then(data => setPhotoList(data))
    }, [album.id, setPhotoList])

    useEffect(() => {
        fetchPhotoList()
    }, [album.id, fetchPhotoList])

    return { photoList, fetchPhotoList }
}
