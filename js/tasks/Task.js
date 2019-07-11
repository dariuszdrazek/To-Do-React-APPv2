import React, { Component } from 'react';

export default class Task extends Component {
     render() {
          return (
               <li
                    style={{ marginBottom: '30px' }}
                    className="list-group-item active task-description">
                    <h2>{this.props.task.title}</h2>
                    <p>{this.props.task.description}</p>
                    <a
                         href=""
                         className="btn btn-secondary float-right"
                         onClick={this.props.handleFinishTask}>
                         Finish
                    </a>
                    <a href="" className="btn btn-secondary float-right">
                         Add operation
                    </a>
               </li>
          );
     }
}
