
export const fetchPosts = () => {
        return (dispatch) => {
        fetch('https://localhost:8080/api/post')
        .then(response => response.json())    
        .then(posts => {
            dispatch({type:'ALL_POSTS', payload: posts})
        })
    }
}