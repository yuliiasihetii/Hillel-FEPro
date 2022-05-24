const ALBUM_LIST_CLASS = '.album-list';
const ALBUM_LIST_HTTPS = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_LIST_HTTPS = 'https://jsonplaceholder.typicode.com/photos?albumId=';

const albumTemplate = document.querySelector('#albumTemplate').innerHTML;
const photoTemplate = document.querySelector('#photoTemplate').innerHTML;
const albumList = document.querySelector('#albumList');
const photosList = document.querySelector('#photosList');

albumList.addEventListener('click', onClickAlbum)

let albumArray = [];
let photosArray = [];

init()

function onClickAlbum(e) {
    const id = +e.target.closest(ALBUM_LIST_CLASS).dataset.id;

    fetchPhotosList(id)
}

function init() {
    fetchAlbumList()
    fetchPhotosList(1)
}

function fetchPhotosList(id) {
    fetch(`${PHOTOS_LIST_HTTPS + id}`)
        .then((res) => res.json())
        .then((data) => {
            photosArray = data;
            renderPhotoList();
        })
}

function fetchAlbumList() {
    fetch(ALBUM_LIST_HTTPS)
        .then((res) => res.json())
        .then((data) => {
            albumArray = data;
            renderAlbumList();
        })
}

function renderAlbumList() {
    albumList.innerHTML = albumArray.map(generateAlbumListHtml).join('\n');
}

function renderPhotoList() {
    photosList.innerHTML = photosArray.map(generatePhotoListHtml).join('\n');
}

function generateAlbumListHtml(album) {
    return interpolate(albumTemplate, album);
}

function generatePhotoListHtml(photos) {
    return interpolate(photoTemplate, photos);
}

function interpolate(template, obj) {
    for (key in obj) {
        template = template.replaceAll(`{{${key}}}`, obj[key]);
    }
    return template;
}