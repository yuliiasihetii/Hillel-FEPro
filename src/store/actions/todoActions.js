export const CREATE_TODO_ACTION_TYPE = 'CREATE_TODO_ACTION_TYPE';
export const createTodo = action(CREATE_TODO_ACTION_TYPE);

export const DELETE_TODO_ACTION_TYPE = 'DELETE_TODO_ACTION_TYPE';
export const deleteTodo = action(DELETE_TODO_ACTION_TYPE);

export const TOGGLE_TODO_ACTION_TYPE = 'TOGGLE_TODO_ACTION_TYPE';
export const toggleTodo = action(TOGGLE_TODO_ACTION_TYPE);

function action(type) {
    return (payload) => {
        return { type, payload }
    }
}