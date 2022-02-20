import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"

import commonReducer from "./commonReducer";


export default combineReducers({
  common : commonReducer,
  form : formReducer,
});