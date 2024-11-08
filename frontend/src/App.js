import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/UserManagement/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import "bootstrap/dist/css/bootstrap.min.css";

// Check for token on load
const jwtToken = localStorage.jwtToken;
// If token exists, set it in the header
if (jwtToken) {
  // Set the token in the header
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}
// Components import for routing purposes  (Landing, Register, Login)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* Router for routing purposes */} 
        <Router>
          <div className="App">
            <Header />
            <Switch>
              {/* Route for the dashboard */}
              <Route exact path="/" component={Landing} />
              {/* Route for the register page */}
              <Route exact path="/register" component={Register} />
              {/* Route for the login page*/}
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
