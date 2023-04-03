import api from "../../../api";

export function getPhotoList(albumId) {
    return api.get(`photos?albumId=${albumId}`).then(res => res.data)
}