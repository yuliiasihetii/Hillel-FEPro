import React from 'react';
import TodoListItem from './TodoListItem'

export default function TodoList({ todos, OnToggle, OnRemove }) {
    return (
        <div>
            {
                todos.map((item) => <TodoListItem key={item.id} todos={item}
                    OnToggle={OnToggle}
                    OnRemove={OnRemove} />)
            }
        </div>
    )
}