import { getItemList, updateItem, removeItem, createItem } from "../../api"
import { createActions } from "./createActions"

export const ADD_ACTION_TYPE = 'ADD_ACTION'
export const addToDo = createActions(ADD_ACTION_TYPE)

export const TOGGLE_ACTION_TYPE = 'TOGGLE_ACTION'
export const toggleToDo = createActions(TOGGLE_ACTION_TYPE)

export const DELETE_ACTION_TYPE = 'DELETE_ACTION'
export const deleteToDo = createActions(DELETE_ACTION_TYPE)

export const SET_ACTION_TYPE = 'SET_ACTION'
export const setToDo = createActions(SET_ACTION_TYPE)

export const LOADING_ACTION_TYPE = 'LOADING_ACTION'
export const loadingToDo = createActions(LOADING_ACTION_TYPE)

export const fetchList = () => (dispatch, getState) => {
    dispatch(loadingToDo(true))
    getItemList()
        .then(data => dispatch(setToDo(data)))
        .finally(() => dispatch(loadingToDo(false)))
}

export const updateFetchList = (id) => (dispatch, getState) => {
    const { list } = getState()
    const item = list.find(i => i.id === id)
    const updatedToDo = { ...item, isDone: !item.isDone }

    dispatch(loadingToDo(true))
    updateItem(updatedToDo)
        .then((data) => dispatch(toggleToDo(data)))
        .finally(() => dispatch(loadingToDo(false)))
}

export const removeItemList = (id) => (dispatch, getState) => {
    dispatch(loadingToDo(true))
    removeItem(id)
        .then(() => dispatch(deleteToDo(id)))
        .finally(() => dispatch(loadingToDo(false)))
}

export const createItemForList = (title) => (dispatch, getState) => {
    const newToDo = {
        title, isDone: false
    }

    dispatch(loadingToDo(true))
    createItem(newToDo)
        .then((data) => dispatch(addToDo(data)))
        .finally(() => dispatch(loadingToDo(false)))
}