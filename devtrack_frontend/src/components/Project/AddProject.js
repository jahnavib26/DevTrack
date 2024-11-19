import React, { Component } from "react";

// This is a class component for adding a new project
class AddProject extends Component {
  // Constructor to initialize state and bind event handlers
  constructor() {
    super();

    // Define the initial state of the component
    this.state = {
      projectName: "", // Name of the project
      projectIdentifier: "", // Unique identifier for the project
      description: "", // Description of the project
      start_date: "", // Project start date
      end_date: "" // Project end date
    };

    // Binding the methods to the current instance of the class
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Method to handle changes in input fields and update the state
  onChange(e) {
    // Dynamically update state based on the input field's name attribute
    this.setState({ [e.target.name]: e.target.value });
  }

  // Method to handle form submission
  onSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new project object using the current state values
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date
    };

    // Log the new project object to the console (replace with API call in a real app)
    console.log(newProject);
  }

  // Render method to display the UI
  render() {
    return (
      <div>
        {
          /*
          Steps implemented:
          - Check name attributes for input fields to match state properties.
          - Create a constructor to initialize state and bind methods.
          - Use the state to hold form data.
          - Set value on input fields to make them controlled components.
          - Create an onChange function to update state dynamically.
          - Bind onChange and onSubmit in the constructor.
          - Use React DevTools to verify state changes.
          */
        }

        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                {/* Form header */}
                <h5 className="display-4 text-center">Create Project form</h5>
                <hr />
                {/* Form element to capture project details */}
                <form onSubmit={this.onSubmit}>
                  {/* Input field for project name */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                  </div>

                  {/* Input field for unique project identifier */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                  </div>

                  {/* Textarea for project description */}
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                  </div>

                  {/* Input field for start date */}
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="start_date"
                      value={this.state.start_date}
                      onChange={this.onChange}
                    />
                  </div>

                  {/* Input field for estimated end date */}
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="end_date"
                      value={this.state.end_date}
                      onChange={this.onChange}
                    />
                  </div>

                  {/* Submit button to save project */}
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Exporting the AddProject component for use in other parts of the application
export default AddProject;
