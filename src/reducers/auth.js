import * as types from '../actions/';

const INITIAL_STATE = {
    token: null,
    user: null,
    isAuthenticated: false,
    isInitialized: false,
    error: null,
    message: null,
    isLoading: false,
    sidebarOpen: false,
    sidebarWidth: null,
    tasks: [
        { title: "Color Palette Selection", subtitle: "Over9k: Gamers App", isActive: true },
        { title: "Creating Landing page for ...", subtitle: "Guitar Tuner", isActive: false },
        { title: "Competitive & functional a...", subtitle: "Doctor+", isActive: false },
    ],
    meetings: [
        {
            time: "20:00",
            title: "Present the project and gather feedback",
            meetingLink: "",
            bgColor: "bg-red-500"
        },
        {
            time: "01:00",
            title: "Meeting with UX team",
            meetingLink: "adsfd",
            bgColor: "bg-gray-400"
        },
        {
            time: "03:00",
            title: "Onboarding of the project",
            meetingLink: "",
            bgColor: "bg-gray-400"
        }
    ],
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
        case 'SIDEBAR_TOGGLE': {
            return {
                ...state,
                sidebarOpen: !state.sidebarOpen,
            }
        }
        case 'ADD_TASK': {
            return {
                ...state,
                tasks: [...state.tasks, action.payload.task],
            }
        }
        case 'ADD_MEETING': {
            return {
                ...state,
                meetings: [...state.meetings, action.payload.meeting],
            }
        }

        default: {
            return state
        }
    }
}