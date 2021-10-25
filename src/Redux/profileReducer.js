import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'my name Alexander', likes: 503},
        {id: 2, message: 'Now i am fucked up in army Belarus', likes: 491},
        {id: 3, message: 'All boys who live here fuck my ass every day', likes: 65987},
        {id: 4, message: 'i Very like it', likes: 32006}
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
            let newPost = {
                id: 5,
                message: action.newPostText,
                likes: getRandomInt(10,500000)
            };
            return {
                ...state,
                posts: [...state.posts, (newPost)],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state
    }
}

// action creators
export const addPostActionCreate = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

//thunks

export const setProfileID = (userId) => {
    return (dispatch) => {
        profileAPI.setProfileID(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;