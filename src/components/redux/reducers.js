import { combineReducers } from "redux";

const rootReducer = combineReducers({
  Message,
});

function Message(state = [], action) {
  switch (action.type) {
    case "MESSAGE":
      return action.payload.data;
    case "DELETE":
      return state.filter((item) => item !== action.payload.data);
    default:
      return state;
  }
}

export default rootReducer;
