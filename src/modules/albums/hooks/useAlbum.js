import { useContext } from 'react'
import { AlbumContex } from "../provider/AlbumProvider"

export default function useAlbum() {
    return useContext(AlbumContex)
}