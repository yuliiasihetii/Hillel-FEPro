const STICKER_LIST_HTTPS = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';
const DELETE_BTN_CLASS = 'delete-btn'
const DESCRIPTION_CLASS = 'description'
const STICKER_SELECTOR = '.description-bloc'


const addSticker = document.querySelector('#addSticker');
const stickersList = document.querySelector('#stickersList');
const stickerTemplate = document.querySelector('#stickerTemplate').innerHTML;

let stickersArray = [];

addSticker.addEventListener('click', onAddSticker);
stickersList.addEventListener('click', onClickSticker);

init()

function getUpdateSticker(id) {
    const note = stickersArray.find((iteam) => {
        if (iteam.id == id) return iteam;
    })
    note.description = this.value;

    fetch(STICKER_LIST_HTTPS + id, {
        method: 'PUT',
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((note) => {
            fetchStickerList(note);
        })
}

function onAddSticker() {
    const note = {
        description: '',
    };

    fetch(STICKER_LIST_HTTPS, {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((note) => {
            stickersArray.push(note);
            renderStickerList(note);
        })
}

function onClickSticker(e) {
    const id = e.target?.closest(STICKER_SELECTOR)?.dataset?.id;

    if (e.target.classList.contains(DELETE_BTN_CLASS) && id != null) {
        fetch(STICKER_LIST_HTTPS + id, {
            method: 'DELETE',
        }).then(() => {
            fetchStickerList();
        })
    }

    if (e.target.classList.contains(DESCRIPTION_CLASS) && id != null) {
        e.target.addEventListener('focusout', getUpdateSticker.bind(e.target, id))
    }
}

function init() {
    fetchStickerList()
}

function fetchStickerList() {
    fetch(STICKER_LIST_HTTPS)
        .then((res) => res.json())
        .then((data) => {
            stickersArray = data;
            renderStickerList();
        })
}

function renderStickerList() {
    stickersList.innerHTML = stickersArray.map(generateStickerListHtml).join('\n');
}

function generateStickerListHtml(stickers) {
    return interpolate(stickerTemplate, stickers)
}

function interpolate(template, obj) {
    for (key in obj) {
        template = template.replaceAll(`{{${key}}}`, obj[key]);
    }
    return template;
}