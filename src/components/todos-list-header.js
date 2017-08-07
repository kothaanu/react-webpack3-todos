import React from 'react';

export default class TodosListHeader extends React.Component {
    render() {
        return (
            
            <thead>
            <tr>
                <th>Task</th>
                <th>Active</th>
                <th>Action</th>
            </tr>
            </thead>
            
        );
    } 
};