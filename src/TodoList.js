import React, { Component } from 'react';

export default class TodoList extends Component {
    render() {
        return (
            <>
                {this.props.list.map((todo) => (
                    <div className={'task-item'
                        + (!todo.isDone ? ' done' : '')
                    }
                        key={todo.id}
                        onClick={() => this.props.onToggle(todo.id)}
                    >
                        {todo.tittle}
                    </div>
                ))}
            </>
        );
    }
}