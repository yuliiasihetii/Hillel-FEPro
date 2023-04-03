import { ADD_ACTION_TYPE, DELETE_ACTION_TYPE, LOADING_ACTION_TYPE, SET_ACTION_TYPE, TOGGLE_ACTION_TYPE } from "../actions/todoActions"

const INITIAL_VALUE = {
    isLoading: false,
    list: []
}

export default function toDoReducer(state = INITIAL_VALUE, { type, payload }) {
    switch (type) {
        case SET_ACTION_TYPE: return { ...state, list: payload }
        case ADD_ACTION_TYPE: return { ...state, list: [...state.list, payload] };
        case TOGGLE_ACTION_TYPE: return { ...state, list: state.list.map((item) => item.id !== payload.id ? item : payload) };
        case DELETE_ACTION_TYPE: return { ...state, list: state.list.filter((item) => item.id !== payload) };
        case LOADING_ACTION_TYPE: return { ...state, isLoading: payload }
        default: return state
    }
}
