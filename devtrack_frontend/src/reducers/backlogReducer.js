// Importing action types from a types file
import {
    GET_BACKLOG,
    GET_PROJECT_TASK,
    DELETE_PROJECT_TASK
  } from "../actions/types";
  
  // Define the initial state of the backlog reducer
  const initialState = {
    project_tasks: [],
    project_task: {}
  };
  
  // Define the reducer function with initial state and action parameter
  export default function backlogReducer(state = initialState, action) {
    switch (action.type) { // Handle different action types
      case GET_BACKLOG:
        return {
          ...state,
          project_tasks: action.payload
        };
  
      case GET_PROJECT_TASK:
        return {
          ...state,
          project_task: action.payload
        };
  
      case DELETE_PROJECT_TASK:
        return {
          ...state,
          project_tasks: state.project_tasks.filter(
            project_task => project_task.projectSequence !== action.payload
          )
        };
  
      default:
        return state; // If the action type doesn't match any case, return the current state unchanged
    }
  }