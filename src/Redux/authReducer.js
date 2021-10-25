import {headerAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};


const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}
//Action Creators
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});

//thunks
export const userAuth = () => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        headerAPI.userAuth().then(data => {
            dispatch(toggleFetching(false));
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
}

export default authReducer;