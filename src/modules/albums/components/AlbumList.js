import React from 'react'
import AlbumListItem from './AlbumListItem'
export default function AlbumList({ list }) {
    return (
        <ul>{list.map((item => <AlbumListItem key={item.id} album={item} />))}</ul>
    )
}
