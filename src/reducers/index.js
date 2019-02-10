import { combineReducers } from "redux";
import videos from "./reducer";
export const reducer = combineReducers({
    videos: videos
});