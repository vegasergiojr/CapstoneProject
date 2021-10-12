
const initialState = {
    posts:[]
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ALL_POSTS':
            return {
                ...state,
                posts: action.payload
            }

            default:
                return state
    }
}

export default reducer