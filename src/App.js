import React, { Component } from "react";
import Main from "./components/MainComponent";
import Login from "./components/LoginComponent";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faCheck);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.user ? (
          <Main increment={this.props.increment} />
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
