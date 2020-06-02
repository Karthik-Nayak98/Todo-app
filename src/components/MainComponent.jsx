import React, { Component } from "react";
import { List } from "./ListComponent";
import firebase from "firebase/app";
import "firebase/database";
import "../config/firebase.utils";
import "../styles/MainStyles.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      count: 0,
      currentTask: "",
    };

    this.database = firebase.database().ref().child("task");
    this.db = firebase.database().ref().child("taskCount");
  }

  componentDidMount() {
    let previousTasks = this.state.tasks;

    this.db.on("value", (snapshot) => {
      const taskCount = snapshot.exists() ? snapshot.val().count : 0;
      this.setState({ count: taskCount });
    });

    this.database.on("child_added", (snapshot) => {
      previousTasks.push({
        id: snapshot.key,
        value: snapshot.val().task,
      });

      this.setState({
        tasks: previousTasks,
      });
    });

    this.database.on("child_removed", (snapshot) => {
      const filteredArray = previousTasks.filter((item) => {
        return item.id !== snapshot.key;
      });
      this.setState({ tasks: filteredArray });
      previousTasks = filteredArray; // to update the previous array after removing the item
    });
  }

  handleChange = (event) => {
    event.persist();
    this.setState({
      currentTask: event.target.value,
    });
  };

  addItem = (event) => {
    event.preventDefault();

    this.database.push().set({
      task: this.state.currentTask,
    });

    this.db.update({
      count: this.state.count,
    });

    this.setState((prevState, prevProps) => ({
      currentTask: "",
      count: this.state.count + 1,
    }));
  };

  deleteTask = (itemId) => {
    this.database.child(itemId).remove();
    this.db.update({ count: this.state.count - 1 });

    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="row">
        <div className="column">
          <div className="card">
            <h1 className="card-header">Todo List App</h1>
            <form className="todo-form" onSubmit={this.addItem}>
              <div className="inputbox">
                <input
                  className="input-title"
                  type="text"
                  value={this.state.currentTask}
                  onChange={this.handleChange}
                  required
                />
                <label>Enter task</label>
              </div>
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
