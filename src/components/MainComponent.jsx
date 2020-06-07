import React, { Component } from "react";
import { List } from "./ListComponent";
import { database, auth } from "../config/firebase.utils";
import "../styles/MainStyles.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      count: 0,
      currentTask: "",
      userName: "",
    };
    const uid = auth().currentUser.uid;
    console.log(auth().currentUser);
    this.database = database().ref(`users/${uid}`).child("task");
    this.db = database().ref(`users/${uid}`).child("taskCount");
  }

  componentDidMount() {
    let previousTasks = this.state.tasks;
    console.log(auth().currentUser);
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

    this.setState(() => ({
      currentTask: "",
    }));

    this.db.set({
      count: this.state.count + 1,
    });
  };

  deleteTask = (itemId) => {
    this.database.child(itemId).remove();
    this.db.set({ count: this.state.count - 1 });
    this.setState({ count: this.state.count - 1 });
  };

  EditItem = (itemId) => {
    const taskValue = this.state.tasks.filter((item) => {
      return item.id === itemId;
    });
    this.setState({ currentTask: taskValue[0].value }); // set the input field value
  };

  logout = () => {
    auth().signOut();
  };

  render() {
    return (
      <div className="container">
        <div className="column">
          <nav>
            <h3 className="display-name">
              Logged in as: {this.props.currentuser}
            </h3>
            <button onClick={this.logout} className="logout">
              <i className="fa fa-sign-out"></i> Logout
            </button>
          </nav>
          <div className="card">
            <h1 className="card-header">Todo List App</h1>
            <form className="todo-form" onSubmit={this.addItem}>
              <div className="task-input">
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
              EditItem={this.EditItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
