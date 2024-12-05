import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import classnames from "classnames";

const AddProjectTask = ({ addProjectTask, errors }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    summary: "",
    acceptanceCriteria: "",
    status: "",
    priority: 0,
    dueDate: "",
    projectIdentifier: id,
    errors: {}
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      summary: state.summary,
      acceptanceCriteria: state.acceptanceCriteria,
      status: state.status,
      priority: state.priority,
      dueDate: state.dueDate
    };

    addProjectTask(state.projectIdentifier, newTask, navigate);
  };

  return (
    <div className="add-PBI">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to={`/projectBoard/${id}`} className="btn btn-light">
              Back to Project Board
            </Link>
            <h4 className="display-4 text-center">Add Project Task</h4>
            <p className="lead text-center">Project Name + Project Code</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.summary
                  })}
                  name="summary"
                  placeholder="Project Task Summary"
                  value={state.summary}
                  onChange={onChange}
                />
                {errors.summary && <div className="invalid-feedback">{errors.summary}</div>}
              </div>
              <textarea
                className="form-control form-control-lg"
                placeholder="Acceptance Criteria"
                name="acceptanceCriteria"
                value={state.acceptanceCriteria}
                onChange={onChange}
              />
              <h6>Due Date</h6>
              <input
                type="date"
                className="form-control form-control-lg"
                name="dueDate"
                value={state.dueDate}
                onChange={onChange}
              />
              <select
                className="form-control form-control-lg"
                name="priority"
                value={state.priority}
                onChange={onChange}
              >
                <option value={0}>Select Priority</option>
                <option value={1}>High</option>
                <option value={2}>Medium</option>
                <option value={3}>Low</option>
              </select>
              <select
                className="form-control form-control-lg"
                name="status"
                value={state.status}
                onChange={onChange}
              >
                <option value="">Select Status</option>
                <option value="TO_DO">TO DO</option>
                <option value="IN_PROGRESS">IN PROGRESS</option>
                <option value="DONE">DONE</option>
              </select>
              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AddProjectTask.propTypes = {
  addProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.errors
});

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
