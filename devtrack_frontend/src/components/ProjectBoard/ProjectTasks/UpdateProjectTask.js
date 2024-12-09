import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import { getProjectTask, updateProjectTask } from "../../../actions/backlogActions";

const UpdateProjectTask = ({ getProjectTask, updateProjectTask, project_task, errors }) => {
  const { backlog_id, pt_id } = useParams();
  const navigate = useNavigate();

  // State to hold form data and error information
  const [state, setState] = useState({
    id: "",
    projectSequence: "",
    summary: "",
    acceptanceCriteria: "",
    status: "",
    priority: "",
    dueDate: "",
    projectIdentifier: "",
    create_At: "",
    errors: {}, // Initialize errors here
    showSuccessPopup: false,
  });

  // Load project task when component mounts
  useEffect(() => {
    getProjectTask(backlog_id, pt_id);
  }, [backlog_id, pt_id, getProjectTask]);

  // Update state when project_task or errors change
  useEffect(() => {
    if (errors) {
      setState((prevState) => ({ ...prevState, errors })); // Use errors from props
    }

    if (project_task) {
      // Destructures and sets project task data to state
      const {
        id,
        projectSequence,
        summary,
        acceptanceCriteria,
        status,
        priority,
        dueDate,
        projectIdentifier,
        create_At,
      } = project_task;

      setState((prevState) => ({
        ...prevState,
        id,
        projectSequence,
        summary,
        acceptanceCriteria,
        status,
        priority,
        dueDate,
        projectIdentifier,
        create_At,
      }));
    }
  }, [project_task,errors]);

  // Handles input changes in form fields
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

    // Handles form submission
  const onSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      id: state.id,
      projectSequence: state.projectSequence,
      summary: state.summary,
      acceptanceCriteria: state.acceptanceCriteria,
      status: state.status,
      priority: state.priority,
      dueDate: state.dueDate,
      projectIdentifier: state.projectIdentifier,
      create_At: state.create_At,
    };

     // Dispatch the updateProjectTask action with form data
    updateProjectTask(state.projectIdentifier, state.projectSequence, updatedTask, navigate);

      // Check if there are no errors after submitting the form
  if (Object.keys(errors).length === 0 && state.summary !== "") {
    setState((prevState) => ({ ...prevState, showSuccessPopup: true }));
  } else {
    setState((prevState) => ({ ...prevState, showSuccessPopup: false }));
  }
  };

  // Closes the success popup and navigates to the project board
  const handlePopupClose = () => {
    setState({ ...state, showSuccessPopup: false });
    navigate(`/projectBoard/${state.projectIdentifier}`);
  };

  // Extracting state values for easy access in JSX
  const { showSuccessPopup, summary, acceptanceCriteria, dueDate, priority, status, errors: stateErrors } = state;

  return (
    <div className="add-PBI">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to={`/projectBoard/${state.projectIdentifier}`} className="btn btn-light">
              Back to Project Board
            </Link>
            <h4 className="display-4 text-center">Update Project Task</h4>
            <p className="lead text-center">
              Project Name: {state.projectIdentifier} | Project Task ID: {state.projectSequence}
            </p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", { "is-invalid": stateErrors.summary })}
                  name="summary"
                  placeholder="Project Task summary"
                  value={summary}
                  onChange={onChange}
                />
                {stateErrors.summary && <div className="invalid-feedback">{stateErrors.summary}</div>}
              </div>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Acceptance Criteria"
                  name="acceptanceCriteria"
                  value={acceptanceCriteria}
                  onChange={onChange}
                />
              </div>
              <h6>Due Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="dueDate"
                  value={dueDate}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="priority"
                  value={priority}
                  onChange={onChange}
                >
                  <option value={0}>Select Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="status"
                  value={status}
                  onChange={onChange}
                >
                  <option value="">Select Status</option>
                  <option value="TO_DO">TO DO</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
              </div>
              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Project Task Updated Successfully!</h3>
            <button onClick={handlePopupClose} className="btn btn-success">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes for validating component props
UpdateProjectTask.propTypes = {
  getProjectTask: PropTypes.func.isRequired,
  updateProjectTask: PropTypes.func.isRequired,
  project_task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

// mapStateToProps maps Redux state to props
const mapStateToProps = (state) => ({
  project_task: state.backlog.project_task,
  errors: state.errors,
});

export default connect(mapStateToProps, { getProjectTask, updateProjectTask })(UpdateProjectTask);
