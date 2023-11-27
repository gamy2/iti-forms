import { combineReducers } from "redux";
import { certificateReducer } from "./certificate-reducer";

export default combineReducers({certificate:certificateReducer})