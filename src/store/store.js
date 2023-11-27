import { legacy_createStore } from "redux";
// import { certificateReducer } from "./reducer/certificate-reducer";
import combineReducers from "./reducer/combineReducers";

export const store =legacy_createStore(combineReducers);