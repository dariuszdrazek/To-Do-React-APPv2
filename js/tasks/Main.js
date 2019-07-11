import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Form from './Form';
import Tasks from './Tasks';

export default class Main extends Component {
     constructor(props) {
          super(props);

          this.state = {
               tasks: null,
               loading: false,
               title: '',
               description: ''
          };
     }

     handleChange = (e, index) => {
          if (index === 1) {
               this.setState({
                    title: e.target.value
               });
          } else {
               this.setState({
                    description: e.target.value
               });
          }
     };

     handleAddTask = e => {
          e.preventDefault();

          const task = {
               description: this.state.description,
               id: 3,
               status: 'open',
               timeSpent: 0,
               title: this.state.title
          };
          this.setState(prevState => ({
               tasks: [...prevState.tasks, task]
          }));
     };

     handleFinishTask = (e, index) => {
          e.preventDefault();

          this.setState(prevState => ({
               tasks: prevState.tasks.map((el, idx) =>
                    index === idx ? { ...el, status: 'closed' } : el
               )
          }));
     };

     componentDidMount() {
          const url = 'http://localhost:3000/tasks';
          fetch(url)
               .then(response => {
                    if (response.ok) return response.json();
                    else throw new Error('Błąd pobrania zasobu');
               })

               .then(data => {
                    return this.setState({
                         tasks: data,
                         loading: true
                    });
               });
     }
     render() {
          console.log(this.state.tasks);
          return (
               <div className="jumbotron container todo-app">
                    <Form
                         handleChange={this.handleChange}
                         handleAddTask={this.handleAddTask}
                    />
                    <Tasks
                         loading={this.state.loading}
                         tasks={this.state.tasks}
                         handleFinishTask={this.handleFinishTask}
                    />
               </div>
          );
     }
}
