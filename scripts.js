const TASK_ITEMS_TEMPLATE = document.getElementById('taskItemsTemplate').innerHTML
const form = document.getElementById('table-form');
const contactList = document.getElementById('contact-list');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const phoneInput = document.getElementById('phone');
const inputList = form.querySelectorAll('input');
const errorEl = document.getElementById('error');
const btn = document.getElementById('btn');

form.addEventListener('submit', onAddBtnClick);
contactList.addEventListener('click', removeRow);

function onAddBtnClick(e) {
    e.preventDefault();

    clearError()

    const formName = getValue(nameInput);
    const formSurname = getValue(surnameInput);
    const formPhoneData = getValue(phoneInput);

    const isInputListEmpty = isEmpty(inputList);

    if (!isInputListEmpty) {
        addContact(formName, formSurname, formPhoneData);
        clearInputs(inputList);
    }
}

function addContact(name, surname, phone) {
    const html = createContactHTML(name, surname, phone);
    contactList.insertAdjacentHTML("beforeend", html)
}

function createContactHTML(name, surname, phone) {
    return TASK_ITEMS_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{surname}}', surname)
        .replace('{{phone}}', phone)
}

function getValue(input) {
    return input.value;
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

function removeRow(e) {
    if (e.target.classList.contains('btn-remove'))
        e.target.closest('tr').remove();
}