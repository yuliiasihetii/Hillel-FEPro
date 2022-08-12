import React, { Component } from 'react';

export default class UserListItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.surname}</td>
                <td>{this.props.item.email}</td>
                <td>
                    <button type="button" onClick={this.onDeleteItemClick} >Delete</button>
                </td>
            </tr>
        )
    }

    onDeleteItemClick = (e) => {
        e.stopPropagation();

        this.props.onRemove(this.props.item.id);
    };
}