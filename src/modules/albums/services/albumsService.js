import api from "../../../api";

export function getAlbums(userId) {
    return api.get(`albums?userId=${userId}`).then(res => res.data)
}

export function getPhotos(albumId) {
    return api.get(`albums/${albumId}`).then(res => res.data)
}