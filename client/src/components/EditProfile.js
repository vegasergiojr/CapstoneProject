
import { connect } from 'react-redux';
import { useState } from 'react';
import * as actionCreators from "../store/creators/actionCreators";

function EditProfile(props) {




    return(
        <div className="profileInput">
            <textarea type="text" name="about_me" placeholder="Describe Yourself"></textarea>
            <input type="text" name="cont1" placeholder=""></input>
            <input type="text" name="cont2" placeholder=""></input>
            <input type="text" name="cont3" placeholder=""></input>
            <input type="text" name="cont4" placeholder=""></input>
            <input type="text" name="cont5" placeholder=""></input>
            <input type="text" name="link1" placeholder=""></input>
            <input type="text" name="link2" placeholder=""></input>
            <input type="text" name="link3" placeholder=""></input>
            <input type="text" name="link4" placeholder=""></input>
            <input type="text" name="link5" placeholder=""></input>
{/* 
            <button onClick={saveInfo}>Save</button> */}
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewPost: () => dispatch(actionCreators.fetchPosts())

    }
}


export default connect(null, mapDispatchToProps)(EditProfile)