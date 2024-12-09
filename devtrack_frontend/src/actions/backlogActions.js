/**
 * Adds a project task to the backlog.
 *
 * @param {string} backlog_id - The ID of the backlog.
 * @param {Object} project_task - The project task to add.
 * @param {Object} history - The history object for navigation.
 * @returns {Function} A Redux thunk action.
 */
import axios from "axios";
import {
  GET_ERRORS,
  GET_BACKLOG,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK
} from "./types";

/**
 * Adds a project task to the backlog.
 *
 * @param {string} backlog_id - The ID of the backlog.
 * @param {Object} project_task - The project task to add.
 * @param {Object} history - The history object for navigation.
 * @returns {Function} A Redux thunk action.
 */
export const addProjectTask = (
  backlog_id,
  project_task,
  history
) => async dispatch => {
  try {
    await axios.post(`/api/backlog/${backlog_id}`, project_task);
    history.push(`/projectBoard/${backlog_id}`);
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
 * Fetches the backlog by ID.
 *
 * @param {string} backlog_id - The ID of the backlog.
 * @returns {Function} A Redux thunk action.
 */
export const getBacklog = backlog_id => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${backlog_id}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
     payload: err.response ? err.response.data : { }
    });
  }
};


/**
 * Fetches a specific project task by ID.
 *
 * @param {string} backlog_id - The ID of the backlog.
 * @param {string} pt_id - The ID of the project task.
 * @param {Object} history - The history object for navigation.
 * @returns {Function} A Redux thunk action.
 */
export const getProjectTask = (
  backlog_id,
  pt_id,
  history
) => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${backlog_id}/${pt_id}`);
    dispatch({
      type: GET_PROJECT_TASK,
      payload: res.data
    });
  } catch (err) {
    console.log("This is the error");
    console.log(err);
    history.push("/dashboard");
  }
};

/**
 * Updates a project task.
 *
 * @param {string} backlog_id - The ID of the backlog.
 * @param {string} pt_id - The ID of the project task.
 * @param {Object} project_task - The updated project task data.
 * @param {Object} history - The history object for navigation.
 * @returns {Function} A Redux thunk action.
 */
export const updateProjectTask = (
  backlog_id,
  pt_id,
  project_task,
  history
) => async dispatch => {
  try {
    await axios.patch(`/api/backlog/${backlog_id}/${pt_id}`, project_task);
    history.push(`/projectBoard/${backlog_id}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
    
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response ? err.response.data : {}
    });
  }
};

/**
 * Deletes a project task.
 *
 * @param {string} backlog_id - The ID of the backlog.
 * @param {string} pt_id - The ID of the project task to delete.
 * @returns {Function} A Redux thunk action.
 */
export const deleteProjectTask = (backlog_id, pt_id) => async dispatch => {
  if (
    window.confirm(
      `You are deleting project task ${pt_id}, this action cannot be undone`
    )
  ) {
    await axios.delete(`/api/backlog/${backlog_id}/${pt_id}`);
    dispatch({
      type: DELETE_PROJECT_TASK,
      payload: pt_id
    });
  }
};