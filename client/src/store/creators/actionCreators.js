
export const fetchPosts = () => {
        return (dispatch) => {
        fetch('https://localhost:8080/api/posts')
        .then(respose => response.json())    
        .then(posts => {
            dispatch({type:'ALL_POSTS', payload: posts})
        })
    }
}