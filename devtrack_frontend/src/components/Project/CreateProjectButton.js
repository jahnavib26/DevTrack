import React from "react"; 
import { Link } from "react-router-dom"; 

// Functional component to render a button for creating a project
const CreateProjectButton = () => {
  return (
    // React.Fragment is used to group elements without adding extra nodes to the DOM
    <React.Fragment>
      {/* Link component for navigation to the "addProject" route */}
      <Link to="/addProject" className="btn btn-lg btn-info">
        {/* Button text */}
        Create a Project
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton; // Export the component for use in other parts of the application
