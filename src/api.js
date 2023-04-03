import { API } from './config'

export function getItemList() {
    return fetch(API).then((res) => res.json())
}

export function updateItem(updateItem) {
    return fetch(API + updateItem.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateItem)
    }).then((res) => res.json())
}

export function removeItem(id) {
    return fetch(API + id, {
        method: 'DELETE'
    })
}

export function createItem(newItem) {
    return fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
    }).then((res) => res.json())
}