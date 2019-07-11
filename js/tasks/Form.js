import React, { Component } from 'react';

export default class Form extends Component {
     render() {
          return (
               <form
                    className="form-group"
                    className="new-task"
                    onSubmit={this.props.handleAddTask}>
                    <h2>Add new task</h2>
                    <input
                         type="text"
                         className="form-control"
                         name="title"
                         placeholder="Title"
                         onChange={e => this.props.handleChange(e, 1)}
                    />
                    <input
                         type="text"
                         className="form-control"
                         name="description"
                         placeholder="Description"
                         onChange={e => this.props.handleChange(e, 2)}
                    />
                    <input
                         type="submit"
                         value="Add"
                         className="btn btn-primary"
                    />
               </form>
          );
     }
}
