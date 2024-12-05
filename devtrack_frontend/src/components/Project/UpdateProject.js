import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
 
// Actions
import { getProject, createProject } from '../../actions/projectActions';
 
function UpdateProject({
  getProject,
  createProject,
  project,
  errors
}) {
  const [projectState, setProjectState] = useState({
    id: '',
    projectName: '',
    projectIdentifier: '',
    description: '',
    start_date: '',
    end_date: ''
  });
 
  const { id } = useParams();
  const navigate = useNavigate();
 
  // Similar to componentWillReceiveProps
  useEffect(() => {
    // When project is loaded from Redux, update local state
    if (project) {
      setProjectState({
        id: project.id || '',
        projectName: project.projectName || '',
        projectIdentifier: project.projectIdentifier || '',
        description: project.description || '',
        start_date: project.start_date || '',
        end_date: project.end_date || ''
      });
    }
  }, [project]);
 
  // Initial project load
  useEffect(() => {
    getProject(id, navigate);
  }, [id, getProject, navigate]);
 
  const onChange = (e) => {
    setProjectState({
      ...projectState,
      [e.target.name]: e.target.value
    });
  };
 
  const onSubmit = (e) => {
    e.preventDefault();
 
    const updateProject = {
      id: projectState.id,
      projectName: projectState.projectName,
      projectIdentifier: projectState.projectIdentifier,
      description: projectState.description,
      start_date: projectState.start_date,
      end_date: projectState.end_date
    };
 
    createProject(updateProject, navigate);
  };
 
  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Update Project form</h5>
            <hr />
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.projectName
                  })}
                  placeholder="Project Name"
                  name="projectName"
                  value={projectState.projectName}
                  onChange={onChange}
                />
                {errors.projectName && (
                  <div className="invalid-feedback">{errors.projectName}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Unique Project ID"
                  name="projectIdentifier"
                  value={projectState.projectIdentifier}
                  onChange={onChange}
                  disabled
                />
              </div>
              <div className="form-group">
                <textarea
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.description
                  })}
                  placeholder="Project Description"
                  name="description"
                  onChange={onChange}
                  value={projectState.description}
                />
                {errors.description && (
                  <div className="invalid-feedback">{errors.description}</div>
                )}
              </div>
              <h6>Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="start_date"
                  value={projectState.start_date}
                  onChange={onChange}
                />
              </div>
              <h6>Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="end_date"
                  value={projectState.end_date}
                  onChange={onChange}
                />
              </div>
 
              <input
                type="submit"
                className="btn btn-primary btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
 
const mapStateToProps = state => ({
  project: state.project.project,
  errors: state.errors
});
 
export default connect(
  mapStateToProps,
  { getProject, createProject }
)(UpdateProject);
has context menu
