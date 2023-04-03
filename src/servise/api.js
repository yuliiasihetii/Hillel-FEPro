export function getList(API) {
    return fetch(API).then(res => res.json())
}