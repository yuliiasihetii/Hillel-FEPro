import React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumListItem({ album }) {
    return (
        <div className='album-item'><Link to={`/album/${album.id}`} className='album-item-title'>{album.title}</Link></div>
    )
}
