import * as types from './index'

export const authSuccess = ({ message }) => {
    return {
        type: types.AUTH_SUCCESS,
        payload: {
            message
        }
    }
}

export const authError = ({ error }) => {
    return {
        type: types.AUTH_ERROR,
        payload: {
            error
        }
    }
}

export const clearSuccess = () => {
    return {
        type: types.CLEAR_SUCCESS,
    }
}

export const clearError = () => {
    return {
        type: types.CLEAR_ERROR,
    }
}

export const loginWithGoogle = () => {
    return {
        type: types.GOOGLE_LOGIN,
    }
}

export const signUp = (email, password) => {
    return {
        type: types.SIGNUP,
        payload: {
            email,
            password
        }
    }
}

export const login = (email, password) => {
    return {
        type: types.LOGIN,
        payload: {
            email,
            password
        }
    }
}

export const getUserRequest = () => {
    return {
        type: types.GET_USER_REQUEST
    }
}

export const getUserSuccess = ({ userInfo }) => {
    return {
        type: types.GET_USER_SUCCESS,
        payload: {
            user: userInfo
        }
    }
}