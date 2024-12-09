import React, { Component, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/backlogActions";

// Modify the wrapper to handle useParams and dispatch
function ProjectBoardWrapper(props) {
  const { id } = useParams();

  // Use useEffect to dispatch getBacklog when component mounts
  useEffect(() => {
    // Pass the id to the prop method
    props.getBacklog(id);
  }, [id, props.getBacklog]);

  // Pass the id as routeParams
  return <ProjectBoard {...props} routeParams={{ id }} />;
}

class ProjectBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }

  // Replace deprecated componentWillReceiveProps with a more modern approach
  componentDidUpdate(prevProps) {
    // Check if errors have changed
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  render() {
    // Use routeParams passed from wrapper
    const { id } = this.props.routeParams;

    // Safely access project_tasks with optional chaining
    const project_tasks = this.props.backlog?.project_tasks || [];
    const { errors } = this.state;

    let BoardContent;

    const boardAlgorithm = (errors, project_tasks) => {
      if (!project_tasks || project_tasks.length < 1) {
        if (errors.projectNotFound) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.projectNotFound}
            </div>
          );
        } else {
          return (
            <div className="alert alert-info text-center" role="alert">
              No Project Tasks on this board
            </div>
          );
        }
      } else {
        return <Backlog project_tasks_prop={project_tasks} />;
      }
    };

    BoardContent = boardAlgorithm(errors, project_tasks);

    return (
      <div className="container">
        <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        {BoardContent}
      </div>
    );
  }
}

ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  routeParams: PropTypes.object
};

// Create a wrapper component that connects the wrapper to Redux
const ConnectedProjectBoardWrapper = connect(
  state => ({
    backlog: state.backlog,
    errors: state.errors
  }),
  { getBacklog }
)(ProjectBoardWrapper);

// Export the connected wrapper
export default function ProjectBoardRouteWrapper() {
  return <ConnectedProjectBoardWrapper />;
}