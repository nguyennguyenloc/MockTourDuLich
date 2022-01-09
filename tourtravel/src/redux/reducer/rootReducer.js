import { combineReducers } from "redux";
import tourTravelReducer from "./tourTravelReducer";

const rootReducer = combineReducers({
  tourTravelReducer: tourTravelReducer,
});

export default rootReducer;
