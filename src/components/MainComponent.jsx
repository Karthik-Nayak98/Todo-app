import React, { Component } from "react";
import { List } from "./ListComponent";
import "../styles/MainStyles.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      count: 0,
      currentTask: {
        id: "",
        value: "",
      },
    };
  }

  handleChange = (event) => {
    event.persist();
    this.setState({
      currentTask: {
        id: Date.now(),
        value: event.target.value,
        completed: false,
      },
    });
  };

  addItem = (event) => {
    event.preventDefault();

    let newArray = this.state.tasks;
    newArray.push(this.state.currentTask);

    this.setState((prevState, prevProps) => ({
      tasks: newArray,
      count: prevState.count + prevProps.increment,
      currentTask: {
        value: "",
      },
    }));
  };

  deleteTask = (itemId) => {
    let newArray = this.state.tasks.filter((item) => item.id !== itemId);

    this.setState((prevState, prevProps) => ({
      tasks: newArray,
      count: prevState.count - prevProps.increment,
    }));
  };

  render() {
    return (
      <div className="row">
        <div className="column">
          <div className="card">
            <form className="todo-form" onSubmit={this.addItem}>
              <h1 className="card-header">Todo List App</h1>
              <hr />
              <input
                className="todo-input"
                type="text"
                placeholder="&#xf022; Add your Todo"
                value={this.state.currentTask.value}
                onChange={this.handleChange}
                required="Enter a todo"
              />

              <button className="todo__button" type="submit">
                Add Task
              </button>
            </form>
          </div>
        </div>

        <div className="column">
          <div className="card">
            {this.state.tasks.length === 0 ? (
              <h1 className="card-header">
                Nothing Left to do!! Enjoy your day
              </h1>
            ) : (
              <h1 className="card-header">{this.state.count} Things to do</h1>
            )}

            <List
              tasks={this.state.tasks}
              taskCompleted={this.taskCompleted}
              deleteItem={this.deleteTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
