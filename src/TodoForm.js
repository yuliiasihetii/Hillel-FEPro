import React, { useState } from 'react';
const INITIAL_VALUE = { title: '' };

function TodoForm({ onSave }) {

    const [form, setForm] = useState(INITIAL_VALUE);

    function onFieldChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function onFormSubmit(e) {
        e.preventDefault();

        onSave(form);

        setForm(INITIAL_VALUE);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                name="title"
                type="text"
                value={form.title}
                onChange={onFieldChange}
            ></input>
            <button>ADD</button>
        </form>
    )
}

export default TodoForm;