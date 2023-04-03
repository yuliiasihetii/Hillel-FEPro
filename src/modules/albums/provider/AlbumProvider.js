import React, { createContext } from 'react'
import { useParams } from 'react-router-dom'
import useAlbumDitails from '../hooks/useAlbumDitails'

export const AlbumContex = createContext(null)

export default function AlbumProvider({ children }) {
    const { albumId } = useParams()
    const { album } = useAlbumDitails(albumId)
    return <AlbumContex.Provider value={album}>{children}</AlbumContex.Provider>
}
