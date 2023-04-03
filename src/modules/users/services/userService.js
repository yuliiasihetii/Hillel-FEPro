import api from "../../../api";

export function getList() {
    return api.get('users').then((res) => res.data)
}

export function getDetails(id) {
    return api.get(`users/${id}`).then((res) => res.data)
}