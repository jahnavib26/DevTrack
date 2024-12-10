import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./App1.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard";
import AddProject from "./components/Project/AddProject";
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import PersonalProjectManagementToolHomePage from "./components/PersonalProjectManagementToolHomePage";

class App extends Component {
  // Main application component that renders the layout and routes
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={< PersonalProjectManagementToolHomePage/>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addProject" element={<AddProject />} />
              <Route path="/updateProject/:id" element={<UpdateProject />} />
              <Route path="/projectBoard/:id" element={<ProjectBoard />} />
              <Route path="/addProjectTask/:id" element={<AddProjectTask />} />
              <Route path="/updateProjectTask/:backlog_id/:pt_id" element={<UpdateProjectTask />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;