import React from 'react';

export default function UserListItem({ item, onRemove }) {

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>
                <button type="button" onClick={(e) => { e.stopPropagation(); onRemove(item.id) }} >Delete</button>
            </td>
        </tr>
    )
}