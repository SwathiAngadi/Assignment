import {
    TOP_CATEGORY,
    CAR_VIDEOS,
    MOTION_VIDEOS
} from "../actions";

const INITIAL_STATE = {
    categoryVideos: [],
    carVideos: [],
    motionVideos: []
};

export default function  (state = INITIAL_STATE, action) {
    switch (action.type) {

        case TOP_CATEGORY:
            return {
                ...state,
                categoryVideos: action.payload
            };
        case CAR_VIDEOS:
            return {
                ...state,
                carVideos: action.payload
            };
        case MOTION_VIDEOS:
            return {
                ...state,
                motionVideos: action.payload
            }

        default:
            return state;
    }
}
