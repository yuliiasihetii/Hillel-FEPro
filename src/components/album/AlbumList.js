// import React, { useEffect, useState } from 'react'
import { ALBUM_API } from '../../config'
import AlbumListItem from './AlbumListItem'
import useList from '../../hooks/useList'
import Loader from '../Loader'

export default function AlbumList() {
    const { list, isLoaded } = useList(ALBUM_API)

    return (
        <div>
            {!isLoaded && <Loader />}
            {list.map((item) => <AlbumListItem album={item} key={item.id} />)}
        </div>
    )
}
