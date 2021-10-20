
export const fetchPosts = () => {
        return (dispatch) => {
        fetch('http://localhost:8080/api/post')
        .then(response => response.json())    
        .then(posts => {
            dispatch({type:'ALL_POSTS', payload: posts})
        })
    }
}

export const fetchInfo = (user_id) => {
        return (dispatch) => {
        fetch(`http://localhost:8080/api/v1/users/edit-profile/${user_id}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }

        }) 
        .then(response => response.json())    
        .then(info => {
            console.log(info)
            dispatch({type:'INFO', payload: info})
        })
    }
}

