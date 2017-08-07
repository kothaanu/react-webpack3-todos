import React from 'react';

export default class TodosListItem extends React.Component {
    render() {
        return (
           <form onSubmit={this.handleCreate.bind(this)}>
           <input type="text" placeholder="add a todo?" ref="createInput" />
           &nbsp;
           <button>create</button>
           </form> 
        );
    } 

    handleCreate(event)
    {
        event.preventDefault();
        console.log(this.refs.createInput.value);
        console.log(this.props.createTask);

        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }
};