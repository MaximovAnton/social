import {authAPI} from '../Api/Api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_USER_DATA: 
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state
    }
}

export const setAuthUserData = (email, id, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {email, id, login, isAuth}})
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if(response.data.resultCode === 0){
        let {email, id,  login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData())
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer