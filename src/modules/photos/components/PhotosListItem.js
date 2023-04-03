import React from 'react'

export default function PhotosListItem({ photo }) {
    return (
        <img alt={photo.title} src={photo.thumbnailUrl} />
    )
}
