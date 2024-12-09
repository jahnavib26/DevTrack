import React from "react";
import { Link } from "react-router-dom";

// CreateProjectButton component for rendering a button to navigate to the "Add Project" page
const CreateProjectButton = () => {
  return (
    // React.Fragment is used to group the content without adding an extra DOM element
    <React.Fragment>
      <Link to="/addProject" className="btn btn-lg btn-info">
        Create a Project
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;