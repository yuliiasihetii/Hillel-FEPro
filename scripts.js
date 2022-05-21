const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const CONTACT_ROW_SELECTOR = '.contact-row';
const STORAGE_KEY = 'contactsList';

const contactForm = document.querySelector('#newContactForm');
const contactsListEl = document.querySelector('#contactsList');
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const formInputs = document.querySelectorAll('.form-input');

contactForm.addEventListener('submit', onContactFormSubmit);
contactsListEl.addEventListener('click', onContactsListClick);

let contactsList = [];

init();

function onContactFormSubmit(e) {
    e.preventDefault();

    const contact = getFormData();

    if (isContactValid(contact)) {
        saveContact(contact);
        resetForm();
    } else {
        alert('Not valid');
    }
}

function onContactsListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const id = getContactRowId(e.target);
        removeContact(id);
    }
    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        const id = getContactRowId(e.target);
        editContact(id);
    }
}

function init() {
    fetchList()
}

function fetchList() {
    fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users')
        .then((res) => res.json())
        .then((data) => {
            contactsList = data;
            renderList();
        })
}

function getFormData() {
    const contact = {};

    formInputs.forEach((inp) => {
        contact[inp.name] = inp.value;
    });

    return contact;
}

function setFormData(contact) {
    formInputs.forEach((inp) => {
        inp.value = contact[inp.name];
    });
}

function isContactValid(contact) {
    return (
        isTextFieldValid(contact.name) &&
        isTextFieldValid(contact.email) &&
        isTextFieldValid(contact.phone)
    );
}

function isTextFieldValid(value) {
    return value !== '';
}

function generateContactHtml(contact) {
    return interpolate(contactTemplate, contact);
}

function saveContact(contact) {
    if (contact.id) {
        updateContact(contact);
    } else {
        addContact(contact);
    }
}

function updateContact(contact) {
    fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/' + contact.id, {
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(() => {
        fetchList();
    })
}

function addContact(contact) {
    fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((data) => {
        fetchList();
    })
}

function resetForm() {
    formInputs.forEach((inp) => {
        inp.value = '';
    });
}

function getContactRowId(el) {
    return el.closest(CONTACT_ROW_SELECTOR).dataset.id;
}

function renderList() {
    contactsListEl.innerHTML = contactsList.map(generateContactHtml).join('\n');
}

function removeContact(id) {
    fetch('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/' + id, {
        method: 'DELETE',
    }).then(() => {
        fetchList();
    })
}

function editContact(id) {
    const contact = contactsList.find((contact) => contact.id === id);
    setFormData(contact);
    updateContact(contact)
}

function interpolate(template, obj) {
    for (key in obj) {
        template = template.replaceAll(`{{${key}}}`, obj[key]);
    }
    return template;
}