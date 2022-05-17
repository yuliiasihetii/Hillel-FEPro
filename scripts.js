const TASK_ITEMS_TEMPLATE = document.getElementById('taskItemsTemplate').innerHTML
const form = document.getElementById('table-form');
const userListEl = document.getElementById('user-list');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address')
const inputList = form.querySelectorAll('input');
const errorEl = document.getElementById('error');
const btn = document.getElementById('btn');

let newId = 0;
function generateId() {
    return ++newId;
}

form.addEventListener('submit', onAddBtnClick);
userListEl.addEventListener('click', onRemoveList);

let userListArray = [];

inite()

function onAddBtnClick(e) {
    e.preventDefault();

    clearError();

    const isInputListEmpty = isEmpty(inputList);

    if (!isInputListEmpty) {
        addUser();
        clearInputs(inputList);
    }
}

function addUser() {

    const userListItem = {
        id: generateId(),
        name: getValue(nameInput),
        email: getValue(emailInput),
        phone: getValue(phoneInput),
        address: getValue(addressInput),
    }

    userListArray.push(userListItem);

    saveData()
    renderListItems()
}

function createUserHTML(obj) {
    return TASK_ITEMS_TEMPLATE
        .replace('{{name}}', obj.name)
        .replace('{{email}}', obj.email)
        .replace('{{phone}}', obj.phone)
        .replace('{{address}}', `${obj.address.city}, ${obj.address.street}`)
        .replace('{{id}}', obj.id)
}


function getValue(input) {
    return input.value;
}

function renderListItems() {
    userListEl.innerHTML = userListArray.map(obj => createUserHTML(obj)).join('\n');
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
    const listElement = e.target.closest('.user-list');

    const id = +listElement.dataset.id;

    if (clickElement.classList.contains('btn-remove')) {
        removeList(id);
    }
}

function removeList(id) {
    userListArray = userListArray.filter(obj => obj.id !== id);

    saveData()
    renderListItems();
}

function inite() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            userListArray = data;
            renderListItems()
        })
}

function saveData() {
    localStorage.setItem('user', JSON.stringify(userListArray))
}