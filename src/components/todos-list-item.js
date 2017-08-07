import React from 'react';

export default class TodosListItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        };
    }
    renderTaskSection()
    {
        const {task, isCompleted} = this.props;
        const taskStyle= {
            color:isCompleted?'green':'red',
            cursor: 'pointer'
        };
        return (          

            <td style={taskStyle}
            onClick={this.props.toggleTask.bind(this.task)}
            >
                {task}
            </td>
        )
    }
    renderActionSection() {
            if(this.state.isEditing) {
                return (
                        <td>
                            <button >Save</button>&nbsp;
                            <button onClick={this.OnCancelClick.bind(this)}>Cancel</button>
                        </td> 
                    )
            }

           return (
                <td>
                    <button  onClick={this.OnEditClick.bind(this)}>Edit</button>&nbsp;
                    <button id='Delete'>Delete</button>
                </td>
           )
        
    }
    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                <td>
                    {this.props.isCompleted?'True':'False'}
                </td>
                {this.renderActionSection()}
            </tr>            
        );
    } 

    OnEditClick()
    {
        this.setState({isEditing: true});
    }
    OnCancelClick()
    {
        this.setState({isEditing: false});
    }
};

