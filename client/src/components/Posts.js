
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import '../styles/Posts.css';
import Comments from './Comments';

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
            <li key= {post.id} id="postLI">
                <br></br>
                <div id="postBody">{post.body_text}</div>
                <div><img src={post.image}></img></div>
                <div>{post.user_id}</div>
                <button onClick = {() => handlePostDelete(post)}>Delete Blog</button>


                {/* <Comments /> */}

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