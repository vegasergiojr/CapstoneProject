
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import '../styles/Posts.css'

function Posts(props) {

    useEffect(() => {
        props.onAllPosts()
    }, [])

    const handlePostDelete = (post) => {
        fetch(`http://localhost:8080/api/post/${post.id}`, {
            method:'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                props.onAllPosts()
            })
    }

    const postItems = props.posts.map(post => {
        return <ul id="postUL">
            <li key= {post.id}>
                <br></br>
                <div>{post.body_text}</div>
                <br></br>
                <div><img src={post.image}></img></div>
                <div>{post.user_id}</div>
                <br></br>
                <button onClick = {() => handlePostDelete(post)}>Delete Post</button>
                <br></br>
                <br></br>
                <div><input type="text" name="body" placeholde="Comment" /></div>
                <br></br>
                <button >Comment</button>
                <br></br>
                <br></br>
            </li>
        </ul>
    })

    return (
        <div className="PostsDiv">
            {postItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAllPosts: () => dispatch(actionCreators.fetchPosts())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)