import { combineReducers } from "redux";
import countriesSlice from "../slices/countres/countriesSlice";

export const rootReducer = combineReducers({
    countries:countriesSlice.reducer
})