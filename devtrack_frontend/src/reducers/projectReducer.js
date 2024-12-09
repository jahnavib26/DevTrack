import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "../actions/types";

const initialState = {
  projects: [], // Initialize an empty array to store a list of projects
  project: {} // Initialize an empty object to store a single project's data
};

export default function projectReducer(state = initialState, action) {
  // The projectReducer function handles project-related actions and updates the state accordingly
  switch (action.type) {
    case GET_PROJECTS:
       // When the GET_PROJECTS action is dispatched, update the state with the list of projects (action.payload)
      return {
        ...state,
        projects: action.payload
      };

    case GET_PROJECT:
      // When the GET_PROJECT action is dispatched, update the state with a single project's data (action.payload)
      return {
        ...state,
        project: action.payload
      };

    case DELETE_PROJECT:
      // When the DELETE_PROJECT action is dispatched, remove the project with the matching projectIdentifier from the state
      return {
        ...state,
        projects: state.projects.filter(
          project => project.projectIdentifier !== action.payload
        )
      };
    default:
      return state;
  }
}