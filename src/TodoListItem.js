import React from 'react';


function TodoListItem({ todos, OnToggle, OnRemove }) {

    return (
        <div className={'task-item' + (todos.isDone ? ' done' : '')}
            onClick={() => OnToggle(todos.id)}>
            {todos.title}
            <span className="delete-btn"
                onClick={(e) => { e.stopPropagation(); OnRemove(todos.id) }}>✘</span>
        </div>
    )
}

export default TodoListItem;