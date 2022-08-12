import React, { Component } from 'react';

export default class UserForm extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <tr>
                    <td>
                        <input type="text" name="name" value={this.state.name} onChange={this.onUserDataChange} />
                    </td>
                    <td>
                        <input type="text" name="surname" value={this.state.surname} onChange={this.onUserDataChange} />
                    </td>
                    <td>
                        <input type="text" name="email" value={this.state.email} onChange={this.onUserDataChange} />
                    </td>
                    <td><button type="submit">Save</button></td>
                </tr>
            </form>
        )
    }

    onUserDataChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    };

    onFormSubmit = (e) => {
        e.preventDefault();

        const contact = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
        }

        if (this.isContactValid(contact)) {
            this.props.onSave(contact);
        }

        this.setState({
            name: '',
            surname: '',
            email: '',
        });
    };

    isContactValid(contact) {
        return (
            this.isValid(contact.name) &&
            this.isValid(contact.surname) &&
            this.isValid(contact.email)
        );
    }

    isValid(inpValue) {
        return inpValue !== '';
    }
}