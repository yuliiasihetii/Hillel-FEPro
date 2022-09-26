import { CREATE_TODO_ACTION_TYPE, DELETE_TODO_ACTION_TYPE, TOGGLE_TODO_ACTION_TYPE } from "../actions/todoActions";

const initialValue = {
    list: [{
        id: 1,
        tittle: 'Swimming',
        isDone: false
    },
    {
        id: 2,
        tittle: 'Tennis',
        isDone: false
    },
    {
        id: 3,
        tittle: 'Gym',
        isDone: true
    }, {
        id: 4,
        tittle: 'Dancing',
        isDone: false
    }]
}

export default function todoReducer(state = initialValue, { type, payload }) {
    switch (type) {
        case TOGGLE_TODO_ACTION_TYPE: return { ...state, list: state.list.map(item => item.id !== payload ? item : { ...item, isDone: !item.isDone }) }
        case DELETE_TODO_ACTION_TYPE: return { ...state, list: state.list.filter(item => item.id !== payload) }
        case CREATE_TODO_ACTION_TYPE: return { ...state, list: [...state.list, { ...payload, id: Date.now(), isDone: false }] }
        default: return state
    }
}