import React, { Component } from "react";
import Main from "./components/MainComponent";
import Login from "./components/LoginComponent";
// import SignUp from "./components/SignUpComponent";
// import { Route, Switch, Redirect } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faCheck);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "kldj",
    };
  }

  render() {
    return (
      <div className="container">
        {/* <Main increment={this.props.increment} /> */}
        {/* <Switch>
          {/* <Route exact pathname="/login" component={Login} /> */}
        {/* <Redirect pathname="/" component={Login} /> */}
        {/* </div>   </Switch> */}
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
