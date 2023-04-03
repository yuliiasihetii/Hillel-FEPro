import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItemList, updateFetchList } from '../store/actions/todoActions'

export default function ToDoListItem({ todo }) {
    const dispatch = useDispatch()

    function onToggleToDO() {
        dispatch(updateFetchList(todo.id))
    }

    function onDeleteToDo(e) {
        e.stopPropagation()
        dispatch(removeItemList(todo.id))
    }
    return (
        <div className={todo.isDone ? 'todo-item done' : 'todo-item'} onClick={onToggleToDO}>
            {todo.title}
            <span onClick={onDeleteToDo}>X</span>
        </div>
    )
}
