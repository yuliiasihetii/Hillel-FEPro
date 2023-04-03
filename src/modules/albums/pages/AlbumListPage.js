import React from 'react'
import useAlbumsList from '../hooks/useAlbumsList'
import AlbumList from '../components/AlbumList'

export default function AlbumListPage() {
    const { list } = useAlbumsList()
    return (
        <><div>
            Album list:
        </div>
            <AlbumList list={list} />
        </>
    )
}
