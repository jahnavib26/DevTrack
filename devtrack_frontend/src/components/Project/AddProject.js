import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import classnames from "classnames";

const AddProject = ({ createProject, errors }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate(); // Use navigate instead of history

  useEffect(() => {
    if (errors) {
      if (Object.keys(errors).length === 0 && formData.description!== "" && formData.projectIdentifier!== "" && formData.projectName!== "") {
        // Show the error popup
        setShowSuccessPopup(true);
      }
      setFormErrors(errors);
    }
  }, [errors]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProject(formData);
  };

  const handlePopupClose = () => {
    // Clear form data
    setFormData({
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: ""
    });
    setShowSuccessPopup(false);

    // Redirect to Dashboard
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Project Form</h5>
              <hr />
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": formErrors.projectName
                    })}
                    placeholder="Project Name"
                    name="projectName"
                    value={formData.projectName}
                    onChange={onChange}
                  />
                  {formErrors.projectName && (
                    <div className="invalid-feedback">
                      {formErrors.projectName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": formErrors.projectIdentifier
                    })}
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={formData.projectIdentifier}
                    onChange={onChange}
                  />
                  {formErrors.projectIdentifier && (
                    <div className="invalid-feedback">
                      {formErrors.projectIdentifier}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": formErrors.description
                    })}
                    placeholder="Project Description"
                    name="description"
                    value={formData.description}
                    onChange={onChange}
                  />
                  {formErrors.description && (
                    <div className="invalid-feedback">
                      {formErrors.description}
                    </div>
                  )}
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="start_date"
                    value={formData.start_date}
                    onChange={onChange}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="end_date"
                    value={formData.end_date}
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

      {/* Success Popup */}
      {showSuccessPopup && (
  <div className="popup">
    <div className="popup-inner">
      <h3>Project Added Successfully!</h3>
      <button onClick={handlePopupClose} className="btn btn-success">
        OK
      </button>
    </div>
  </div>
)}

    </div>
  );
};

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  errors: state.errors
});

export default connect(mapStateToProps, { createProject })(AddProject);
