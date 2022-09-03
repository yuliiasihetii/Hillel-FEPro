import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPhotosList } from "../services/AlbumServices"
import Heading from "./Heading"
import PhotoListItem from "./PhotoListItem"


function PhotoList() {
    const params = useParams()
    const [photoList, setPhotoList] = useState([])

    useEffect(() => {
        getPhotosList(params.id).then(setPhotoList)
    }, [params.id])

    return (<>
        <Heading />
        {photoList.map((list) => (
            <PhotoListItem key={list.id} list={list} />
        ))}
    </>)
}

export default PhotoList