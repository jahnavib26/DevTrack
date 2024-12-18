import React, { Component } from "react";
import ProjectTask from "./ProjectTasks/ProjectTask";

class Backlog extends Component {
  render() {
    const { project_tasks_prop } = this.props;

  // Filter tasks based on status and map each task to a ProjectTask component
    const todoItems = project_tasks_prop
      .filter(project_task => project_task.status === "TO_DO")
      .map(project_task => (
        <ProjectTask key={project_task.id} project_task={project_task} />
      ));

    const inProgressItems = project_tasks_prop
      .filter(project_task => project_task.status === "IN_PROGRESS")
      .map(project_task => (
        <ProjectTask key={project_task.id} project_task={project_task} />
      ));

    const doneItems = project_tasks_prop
      .filter(project_task => project_task.status === "DONE")
      .map(project_task => (
        <ProjectTask key={project_task.id} project_task={project_task} />
      ));

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-secondary text-white">
                <h3>TO DO</h3>
              </div>
            </div>
            {todoItems}
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-primary text-white">
                <h3>In Progress</h3>
              </div>
            </div>
            {inProgressItems}
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-success text-white">
                <h3>Done</h3>
              </div>
            </div>
            {doneItems}
          </div>
        </div>
      </div>
    );
  }
}

// Export the Backlog component to use it elsewhere in the app
export default Backlog;