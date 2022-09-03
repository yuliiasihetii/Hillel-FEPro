import React, { useEffect, useState } from "react"
import { getAlbumList } from "../services/AlbumServices";
import AlbumListItem from "./AlbumListItem";
import Heading from "./Heading";

function AlbumList() {
    const [albumList, setAlbumList] = useState([]);

    useEffect(() => {
        getAlbumList().then(setAlbumList)
    }, [])
    return (<>
        <Heading />
        {albumList.map((album) => (
            <AlbumListItem key={album.id} album={album} />
        ))}
    </>)
}

export default AlbumList