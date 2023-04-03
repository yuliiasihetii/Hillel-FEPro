import React from 'react'

export default function PhotoListItem({ photo }) {
    return (
        <img src={photo.thumbnailUrl} alt={photo.title}></img>
    )
}
