const TASK_ITEMS_TEMPLATE = document.getElementById('taskItemsTemplate').innerHTML
const form = document.getElementById('table-form');
const contactListEl = document.getElementById('contact-list');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const phoneInput = document.getElementById('phone');
const inputList = form.querySelectorAll('input');
const errorEl = document.getElementById('error');
const btn = document.getElementById('btn');

let newId = 0;
function generateId() {
    return ++newId;
}

form.addEventListener('submit', onAddBtnClick);
contactListEl.addEventListener('click', onRemoveList);

let contactListArray = [];

inite()

function onAddBtnClick(e) {
    e.preventDefault();

    clearError();

    const isInputListEmpty = isEmpty(inputList);

    if (!isInputListEmpty) {
        addContact();
        clearInputs(inputList);
    }
}

function addContact() {

    const contactListItem = {
        id: generateId(),
        name: getValue(nameInput),
        surname: getValue(surnameInput),
        phone: getValue(phoneInput),
    }

    contactListArray.push(contactListItem);

    saveData()
    renderListItems()
}

function createContactHTML(obj) {
    return TASK_ITEMS_TEMPLATE
        .replace('{{name}}', obj.name)
        .replace('{{surname}}', obj.surname)
        .replace('{{phone}}', obj.phone)
        .replace('{{id}}', obj.id)
}

function getValue(input) {
    return input.value;
}

function renderListItems() {
    contactListEl.innerHTML = contactListArray.map(obj => createContactHTML(obj)).join('\n');

    // contactListEl.innerHTML = '';

    // let renderData = contactListArray.map(obj => createContactHTML(obj)).join('\n');

    // contactListEl.insertAdjacentHTML('beforeend', renderData);
}

function clearInputs(inputList) {
    inputList.forEach(input => {
        input.value = '';
    })
}

function isEmpty(inputList) {

    for (let i = 0; i < inputList.length; i++) {
        if (!inputList[i].value) {
            errorEl.classList.remove('input-subtext');
            errorEl.classList.add('error');
            return true;
        }
    };

    return false;
}

function clearError() {
    errorEl.classList.remove('error');
    errorEl.classList.add('input-subtext');
}

function onRemoveList(e) {
    const clickElement = e.target;
    const listElement = e.target.closest('.contact-list');

    const id = +listElement.dataset.id;

    if (clickElement.classList.contains('btn-remove')) {
        removeList(id);
    }
}

function removeList(id) {
    contactListArray = contactListArray.filter(obj => obj.id !== id);

    saveData()
    renderListItems();
}

function inite() {
    contactListArray = restoreData()
    renderListItems()
}

function saveData() {
    localStorage.setItem('contact', JSON.stringify(contactListArray))
}

function restoreData() {
    const data = localStorage.getItem('contact');

    return data ? JSON.parse(data) : [];
}