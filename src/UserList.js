import React from 'react';
import UserListItem from './UserListItem';

export default function UserList({ list, onRemove }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody> {list.map((item) => (
                <UserListItem
                    key={item.id}
                    item={item}
                    onRemove={onRemove}
                />
            ))}</tbody>
        </table>
    )
}