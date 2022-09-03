import React from "react"
import { Link } from "react-router-dom"

function AlbumListItem({ album }) {
    return (<>
        <div className="album-list"><Link className="link" to={`/albumlist/${album.id}`}>{album.title}</Link></div>
    </>)
}

export default AlbumListItem