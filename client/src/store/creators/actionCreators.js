
export const fetchPosts = () => {
        return (dispatch) => {
        fetch('http://localhost:8080/api/post')
        .then(response => response.json())    
        .then(posts => {
            dispatch({type:'ALL_POSTS', payload: posts})
        })
    }
}

export const fetchInfo = () => {
        return (dispatch) => {
        fetch('http://localhost:8080/api/v1/users/:user', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }

        }) 
        .then(response => response.json())    
        .then(info => {
            dispatch({type:'INFO', payload: info})
        })
    }
}

