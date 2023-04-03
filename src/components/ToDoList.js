import React, { useEffect } from 'react'
import ToDoListItem from './ToDoListItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchList } from '../store/actions/todoActions'

export default function ToDoList() {
    const list = useSelector((state) => state.list)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchList())
    }, [])

    return (
        <>
            {
                list.map((item) => <ToDoListItem key={item.id} todo={item} />)
            }
        </>
    )
}
