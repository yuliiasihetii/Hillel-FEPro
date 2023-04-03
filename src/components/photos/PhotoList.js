import React from 'react'
import { useParams } from 'react-router-dom'
import { PHOTOS_API } from '../../config';
import PhotoListItem from './PhotoListItem';
import useList from '../../hooks/useList';
import Loader from '../Loader';

export default function PhotoList() {
    const { id } = useParams();
    const { list, isLoaded } = useList(PHOTOS_API + id)

    return (
        <div className='photo-list'>
            {!isLoaded && <Loader />}
            {list.map((item) => <PhotoListItem key={item.id} photo={item} />)}
        </div>
    )
}
