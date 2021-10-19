
const initialState = {
    posts:[],
    info:[],
    comments: [],
    isLoggedIn: false
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ALL_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'INFO':
            return {
                ...state,
                info: action.payload
            }
        case 'LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true

            }
            default:
                return state
    }
}

export default reducer


