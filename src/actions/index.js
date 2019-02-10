import axios from 'axios';

export const TOP_CATEGORY = "TOP_CATEGORY";
export const CAR_VIDEOS = "CAR_VIDEOS";
export const MOTION_VIDEOS = "MOTION_VIDEOS";

export function topCategoryVideos () {
    return axios.get('http://localhost:3000/topCategory').then(res => {
    console.log(res.data);
        return {
            type: TOP_CATEGORY,
            payload: res.data.category
        };
    });
};


export function carVideos () {
    return axios.get('http://localhost:3000/carVideos').then(res => {
        console.log(res.data);
        return {
            type: CAR_VIDEOS,
            payload: res.data.car
        };
    });
};

export function motionVideos () {
    return axios.get('http://localhost:3000/motionVideos').then(res => {
        console.log(res.data);
        return {
            type: MOTION_VIDEOS,
            payload: res.data.motion
        };
    });
};