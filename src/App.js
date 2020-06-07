import React, { Component } from "react";
import Main from "./components/MainComponent";
import Login from "./components/LoginComponent";
import SignUp from "./components/SignUpComponent";
import { Route, Switch } from "react-router-dom";
import { auth } from "./config/firebase.utils";
import PrivateRoute from "./helpers/PrivateRoute";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      currentuser: null,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      user
        ? this.setState({
            authenticated: true,
            currentuser: user,
            loading: false,
          })
        : this.setState({
            authenticated: false,
            currentuser: null,
            loading: false,
          });
    });
  }

  render() {
    return this.state.loading ? (
      <div>
        <h2>Loading...</h2>
      </div>
    ) : (
      <Switch>
        <PrivateRoute
          path="/todo"
          authenticated={this.state.authenticated}
          component={Main}
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    );
  }
}

export default App;
