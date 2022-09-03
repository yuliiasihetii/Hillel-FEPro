import { ALBUM_LIST_URL, PHOTO_LIST_BY_ID_URL } from "../../config"

export function getAlbumList() {
    return fetch(ALBUM_LIST_URL).then((res) => res.json())
}

export function getPhotosList(id) {
    return fetch(PHOTO_LIST_BY_ID_URL + id).then((res) => res.json())
}