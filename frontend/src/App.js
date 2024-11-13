import React, { Component } from "react";
import "./App.css";
// import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Using Routes for v6+
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/UserManagement/Login";
import Register from "./components/UserManagement/Register";  // Import Register component
// import Landing from "./components/Landing";  // Import Landing component
// import Header from "./components/Layout/Header";  // Import Header component
// import jwt_decode from "jwt-decode";
// import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import "bootstrap/dist/css/bootstrap.min.css";

// Check for token on load
// const jwtToken = localStorage.jwtToken;
// if (jwtToken) {
//   setJWTToken(jwtToken);
//   const decoded_jwtToken = jwt_decode(jwtToken);
//   store.dispatch({
//     type: SET_CURRENT_USER,
//     payload: decoded_jwtToken
//   });
//   const currentTime = Date.now() / 1000;
//   if (decoded_jwtToken.exp < currentTime) {
//     store.dispatch(logout());
//     window.location.href = "/";
//   }
// }

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />     {/* Adjusted for React Router v6 */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard route */}
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
