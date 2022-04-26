const listEl = document.getElementById('listEl');
const taskEl = document.getElementById('taskEl');
const errorEl = document.getElementById('error');
const addButtonEl = document.getElementById('btn');

addButtonEl.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    clearError()
    const el = getTask();
    const isError = validateTask(el);

    if (!isError) {
        createList();
    }

    clearTask();
}

function getTask() {
    return taskEl.value;
}

function clearTask() {
    taskEl.value = '';
}

function createList() {
    const li = document.createElement('li');
    li.textContent = getTask();
    listEl.append(li);
}

function validateTask(value) {
    if (value = '' || value.length < 4) {
        errorEl.textContent = 'Invalid Operator';
        taskEl.classList.add('invalid');
        return true;
    }
    return false;
}

function clearError() {
    errorEl.textContent = '';
    taskEl.classList.remove('invalid');
}