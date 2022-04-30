const INPUT_CLASS = 'input';
const ERROR_CLASS = 'error';
const INPUT_WRAPPER_CLASS = 'input-wrapper';
const BTN_REMOVE_CLASS = 'btn-remove'

const form = document.getElementById('table-form');
const table = document.getElementById('table-contacts');

form.addEventListener('submit', formController);
table.addEventListener('click', removeRow);

function formController() {
    let text = null;

    const inputList = form.querySelectorAll('.' + INPUT_WRAPPER_CLASS);

    for (let i = 0; i < inputList.length; i++) {
        text = inputList[i].querySelector(INPUT_CLASS).value.trim();

        if (!isEmpty(text, inputList[i])) {
            inputList[i].classList.add(ERROR_CLASS);
            return;
        } else {
            inputList[i].classList.remove(ERROR_CLASS);
        }
    }

    addContact(inputList);
    clearForm();
}

function isEmpty(text, element) {

    if (text.length === 0) {
        element.classList.add(ERROR_CLASS);
        return false;
    }

    return true;
}

function addContact(inputList) {
    let text = null;

    let addElement = '<td class="none">';

    inputList.forEach(element => {
        text = element.querySelector(INPUT_CLASS).value.trim();

        addElement += `<td class ="td"> ${text} </td>`;
    });

    addElement += '<td><span class="btn-remove">X</span></td>';
    addElement += '</td>';

    table.insertAdjacentHTML('beforeend', addElement);
}

function clearForm() {
    form.querySelectorAll(INPUT_CLASS).forEach(element => {
        element.value = '';
    })
}

function removeRow(e) {
    if (e.target.classList.contains(BTN_REMOVE_CLASS))
        e.target.closest('tr').remove();
}