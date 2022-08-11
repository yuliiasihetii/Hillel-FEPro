import React, { Component } from 'react';

export default class TodoForm extends Component {
    state = {
        tittle: ''
    }
    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit}>
                    <input value={this.state.tittle} onChange={this.onNewTittle}></input>
                    <button>ADD</button>
                </form>
            </>
        )
    }

    onNewTittle = (e) => {
        this.setState({
            tittle: e.target.value,
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            tittle: this.state.tittle,
            isDone: true,
        };

        this.setState({
            tittle: '',
        });

        this.props.onSave(newTodo);
    };
}