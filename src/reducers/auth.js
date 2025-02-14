import * as types from '../actions/';

const INITIAL_STATE = {
    token: null,
    user: null,
    isAuthenticated: false,
    isInitialized: false,
    error: null,
    message: null,
    isLoading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.GOOGLE_LOGIN: {
            return {
                isLoading: true,
            }
        }
        case types.SIGNUP: {
            return {
                isLoading: true,
            }
        }

        case types.AUTH_SUCCESS: {
            return {
                ...state,
                message: action.payload.message,
                isLoading: false,
            }
        }

        case types.AUTH_ERROR: {
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            }
        }

        case types.CLEAR_SUCCESS: {
            return {
                ...state,
                message: null,
            }
        }

        case types.CLEAR_ERROR: {
            return {
                ...state,
                error: null,
            }
        }

        case types.GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
            }
        }

        case types.INITIAL: {
            return {
                ...state,
                isInitialized: true,
                isAuthenticated: false
            }
        }
        default: {
            return state
        }
    }
}