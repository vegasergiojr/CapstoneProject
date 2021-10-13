import { connect } from 'react-redux';
import { useState } from 'react';
import * as actionCreators from "../store/creators/actionCreators";
import '../styles/AddPost.css';

function AddPost(props) {

    const [post, setPost] = useState({})

    const handleOnChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        })
    }

    const newPost = () => {
        fetch('http://localhost:8080/api/post', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(result => {
            })
        props.onNewPost()
    }

    return(
        <div id="addPostDiv">
            <textarea type="text" name="body_text" placeholder="Share Something!" onChange={handleOnChange} />
            <br></br>
            <input type="text" name="image" placeholder="Share Image!" onChange={handleOnChange} />
            <br></br>
            <button onClick={newPost}>Share Post!</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewPost: () => dispatch(actionCreators.fetchPosts())

    }
}

export default connect(null, mapDispatchToProps)(AddPost)