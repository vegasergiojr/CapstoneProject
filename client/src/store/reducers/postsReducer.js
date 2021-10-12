
const initialState = {
    posts:[],
    info:[]
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
            default:
                return state
    }
}

export default reducer


