$(() => {
    const ALBUM_LIST_CLASS = '.album-list';
    const PHOTO_LIST_CLASS = '.photo-list';
    const ALBUM_LIST_HTTPS = 'https://jsonplaceholder.typicode.com/albums';
    const PHOTOS_LIST_HTTPS = 'https://jsonplaceholder.typicode.com/photos';

    const $albumTemplate = $('#albumTemplate').html();
    const $photoTemplate = $('#photoTemplate').html();
    const $albumList = $('#albumList');
    const $photosList = $('#photosList');

    const $albumsApi = new RestApi(ALBUM_LIST_HTTPS);
    const $photosApi = new RestApi(PHOTOS_LIST_HTTPS);

    $albumList.on('click', onClickAlbum)

    init()

    function onClickAlbum(e) {
        const $id = +e.target.closest(ALBUM_LIST_CLASS).dataset.id;

        fetchPhotosList($id)
    }

    function init() {
        fetchAlbumList().then((albumArray) => fetchPhotosList(albumArray[0].id))
    }

    function fetchPhotosList(albumId) {
        return $photosApi.getList({ albumId }).then(renderPhotoList);
    }

    function fetchAlbumList() {
        return $albumsApi.getList().then(renderAlbumList);
    }

    function renderAlbumList(albumArray) {
        $albumList.html(albumArray.map(generateAlbumListHtml).join('\n'));
        return albumArray;
    }

    function renderPhotoList(photosArray) {
        $photosList.html(photosArray.map(generatePhotoListHtml).join('\n'));
        return photosArray;
    }

    function generateAlbumListHtml(album) {
        return interpolate($albumTemplate, album);
    }

    function generatePhotoListHtml(photos) {
        return interpolate($photoTemplate, photos);
    }

    function interpolate(template, obj) {
        for (key in obj) {
            template = template.replaceAll(`{{${key}}}`, obj[key]);
        }
        return template;
    }
})