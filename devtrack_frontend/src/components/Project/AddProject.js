import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import classnames from "classnames";

// AddProject component for creating a new project
const AddProject = ({ createProject, errors }) => {
  // State for form data
  const [formData, setFormData] = useState({
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: ""
  });

    // State for form errors
  const [formErrors, setFormErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate(); 

  // useEffect to update form errors and display success popup if necessary
  useEffect(() => {
    if (errors) {
      if (Object.keys(errors).length === 0 && formData.description!== "" && formData.projectIdentifier!== "" && formData.projectName!== "") {
        setShowSuccessPopup(true);
      }
      setFormErrors(errors);
    }
  }, [errors]);

  // Handle form field changes
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    createProject(formData);
  };

    // Close the success popup and reset the form
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

// Prop type validation for component props
AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  errors: state.errors
});

export default connect(mapStateToProps, { createProject })(AddProject);
