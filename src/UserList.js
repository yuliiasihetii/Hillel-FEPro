import React, { Component } from 'react';

import UserListItem from './UserListItem'

export default class UserList extends Component {
    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody> {this.props.list.map((item) => (
                        <UserListItem
                            key={item.id}
                            item={item}
                            onRemove={this.props.onRemove}
                        />
                    ))}</tbody>
                </table>
            </>)
    }
}