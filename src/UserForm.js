import React, { useState } from 'react';

const NEW_USER = {
    name: '',
    surname: '',
    email: '',
}

export default function UserForm({ onSave }) {
    const [newUser, setNewUser] = useState(NEW_USER);

    function onFieldChange(e) {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    function onFormSubmit(e) {
        e.preventDefault();

        if (isContactValid(newUser)) {
            onSave(newUser);
        }

        setNewUser(NEW_USER);
    }
    return (
        <form onSubmit={onFormSubmit}>
            <tr>
                <td>
                    <input name="name"
                        type="text"
                        value={newUser.name}
                        onChange={onFieldChange} />
                </td>
                <td>
                    <input name="surname"
                        type="text"
                        value={newUser.surname}
                        onChange={onFieldChange} />
                </td>
                <td>
                    <input name="email"
                        type="text"
                        value={newUser.email}
                        onChange={onFieldChange} />
                </td>
                <td><button type="submit">Save</button></td>
            </tr>
        </form>
    )
}
function isContactValid(contact) {
    return (
        isValid(contact.name) &&
        isValid(contact.surname) &&
        isValid(contact.email)
    );
}

function isValid(inpValue) {
    return inpValue !== '';
}