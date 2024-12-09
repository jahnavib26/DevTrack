import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import backlogReducer from "./backlogReducer";

export default combineReducers({
  errors: errorReducer, // Combine the errorReducer and map it to the 'errors' key in the root state
  project: projectReducer, // Combine the projectReducer and map it to the 'project' key in the root state
  backlog: backlogReducer // Combine the backlogReducer and map it to the 'backlog' key in the root state
});