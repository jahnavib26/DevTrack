import { GET_ERRORS } from "../actions/types";

// Initialize the state as an empty object, which will store error messages or data
const initialState = {};

// Define the errorReducer function, with state initialized to an empty object
function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}

// Export the errorReducer as the default export from this file
export default errorReducer;
