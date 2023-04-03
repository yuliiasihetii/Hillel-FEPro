import React from 'react'
import usePhotoList from '../hooks/usePhotoList'
import PhotoListItem from '../components/PhotosListItem'

export default function PhotosList() {
    const { photoList } = usePhotoList()
    return (<>
        {photoList.map(item => <PhotoListItem photo={item} key={item.id} />)}
    </>

    )
}
