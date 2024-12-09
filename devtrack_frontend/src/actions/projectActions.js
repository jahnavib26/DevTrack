import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";

/**
 * Creates a new project.
 *
 * @param {Object} project - The project data to create.
 * @param {Object} history - The history object for navigation.
 * @returns {Function} A Redux thunk action.
 */
export const createProject = (project, history) => async dispatch => {
  try {
    await axios.post("/api/project", project);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response ? err.response.data : { }
    });
  }
};

/**
 * Fetches all projects.
 *
 * @returns {Function} A Redux thunk action.
 */
export const getProjects = () => async dispatch => {
  const res = await axios.get("/api/project/all");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data
  });
};

/**
 * Fetches a single project by its ID.
 *
 * @param {string} id - The ID of the project to retrieve.
 * @param {Object} history - The history object for navigation.
 * @returns {Function} A Redux thunk action.
 */
export const getProject = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/project/${id}`);
    dispatch({
      type: GET_PROJECT,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

/**
 * Deletes a project by its ID.
 *
 * @param {string} id - The ID of the project to delete.
 * @returns {Function} A Redux thunk action.
 */
export const deleteProject = id => async dispatch => {
  if (
    window.confirm(
      "Are you sure? This will delete the project and all the data related to it"
    )
  ) {
    await axios.delete(`/api/project/${id}`);
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    });
  }
};