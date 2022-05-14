const todoList = document.querySelector('#todoList');
const listItem = document.querySelector('#listItem').innerHTML;
const form = document.querySelector('#form_1');
const taskInput = form.querySelector('#todo-input');
const btnAdd = form.querySelector('#btn-add');
const errorEl = form.querySelector('#error')

let newId = 0;
function generateId() {
    return ++newId;
}

let todoListArray = [];


btnAdd.addEventListener('click', targetForm);
todoList.addEventListener('click', onClickTodoList)

function onClickTodoList(e) {
    const clickElement = e.target;
    const listElement = e.target.closest('.list-item');

    const id = +listElement.dataset.id;

    if (clickElement.classList.contains('btn-remove')) {
        onRemoveList(id);
    }

    if (clickElement.classList.contains('todo-task')) {
        onDisabledTask(id);
    }
}

function targetForm(e) {
    e.preventDefault();

    clearError()

    const value = getTask();
    const isError = isValidate(value);

    if (isError) {
        addToList(value);
        clearInput();
    } else {
        erorFrom();
    }
}

function getTask() {
    return taskInput.value;
}

function erorFrom() {
    errorEl.classList.remove('input-subtext');
    errorEl.classList.add('error');
}

function clearError() {
    errorEl.classList.remove('error');
    errorEl.classList.add('input-subtext');
}

function clearInput() {
    taskInput.value = '';
}

function addToList(value) {
    const todoListItem = {
        id: generateId(),
        title: value,
        isActive: true,
    }

    todoListArray.push(todoListItem);

    renderListItem();
}

function renderListItem() {
    todoList.innerHTML = '';

    let renderData = todoListArray.map(obj => templateBuild(obj)).join('\n');

    todoList.insertAdjacentHTML('beforeend', renderData);
}

function onRemoveList(id) {
    todoListArray = todoListArray.filter(obj => obj.id !== id);

    renderListItem();
}

function isValidate(value) {
    return value.length > 3 ? true : false;
}

function onDisabledTask(id) {
    const findELement = todoListArray.find(obj => obj.id === id);
    findELement.isActive = !findELement.isActive;

    renderListItem();
}

function templateBuild(objItem) {
    return listItem
        .replace('{{id}}', objItem.id)
        .replace('{{isActive}}', objItem.isActive)
        .replace('{{title}}', objItem.title)
}