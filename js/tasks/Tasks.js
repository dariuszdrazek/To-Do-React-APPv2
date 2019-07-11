import React, { Component } from 'react';
import Task from './Task';

export default class Tasks extends Component {
     render() {
          if (this.props.loading) {
               return (
                    <ul style={{ marginTop: '10px' }}>
                         {this.props.tasks.map((task, index) => {
                              return (
                                   <Task
                                        handleFinishTask={e =>
                                             this.props.handleFinishTask(
                                                  e,
                                                  index
                                             )
                                        }
                                        key={index}
                                        task={task}
                                   />
                              );
                         })}
                    </ul>
               );
          } else {
               return null;
          }
     }
}
