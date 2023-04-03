import React from 'react'
import useAlbum from '../hooks/useAlbum'
import { Outlet } from 'react-router-dom'

export default function AlbumDitails() {

    const album = useAlbum()
    return (
        <>
            <h4>Album details</h4>
            {album.title}
            <Outlet />
        </>
    )
}
