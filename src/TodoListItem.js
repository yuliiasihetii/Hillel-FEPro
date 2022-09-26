import React from "react";
import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "./store/actions/todoActions";

export default function TodoListItem({ item }) {
    const dispatch = useDispatch();

    function onToggleClick() {
        dispatch(toggleTodo(item.id));
    }

    function onDeleteBtn(e) {
        e.stopPropagation();
        dispatch(deleteTodo(item.id))
    }

    return (<div className={'task-item' + (item.isDone ? ' done' : '')}
        onClick={onToggleClick}>
        {item.tittle}
        <span onClick={onDeleteBtn} className="delete-btn">✘</span>
    </div>)
}