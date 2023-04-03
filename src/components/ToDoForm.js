import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createItemForList } from '../store/actions/todoActions'

export default function ToDoForm() {
    const [title, seTitle] = useState('')

    const dispatch = useDispatch()

    function inputChange(e) {
        seTitle(e.target.value)
    }

    function onAddToDo() {
        dispatch(createItemForList(title))
        seTitle('')
    }

    return (
        <div>
            <input value={title} onChange={inputChange} />
            <button onClick={onAddToDo}>Save</button>
        </div>
    )
}
