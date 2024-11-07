// import React from 'react';
import '../css/CreateProjectForm.css';

// this is a functional component that renders the create project form
const CreateProject = () => {
  // return the create project form
  return (
    <div className="create-project-container">
      <h1>Create Project</h1>
      <form>
        <label>Project Name:</label>
        <input type="text" placeholder="Project Name" required />
        <label>Project ID:</label>
        <input type="text" placeholder="Unique Project ID" required />
        <label>Description:</label>
        <textarea placeholder="Project Description" rows="4" required></textarea>
        <label>Start Date:</label>
        <input type="date" placeholder="Start Date" required />
        <label>End Date:</label>
        <input type="date" placeholder="Estimated End Date" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProject;
