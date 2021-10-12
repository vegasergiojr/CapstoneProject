import { connect } from 'react-redux';
import { useState } from 'react';
import * as actionCreators from "../store/creators/actionCreators";

function EditProfile(props) {

    const [info, setInfo] = useState({})

    const handleUserChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        })
    }

    const saveInfo = () => {
        fetch('http://localhost:8080/api/info', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        })
            .then(response => response.json())
            .then(result => {
            })
        props.onNewInfo()
    }

    return(
        <div className="profileInput">
            <textarea type="text" name="about_me" placeholder="Describe Yourself"></textarea>
            <input type="text" name="cont1" placeholder="" onChange={handleUserChange} />
            <input type="text" name="cont2" placeholder="" onChange={handleUserChange} />
            <input type="text" name="cont3" placeholder="" onChange={handleUserChange} />
            <input type="text" name="cont4" placeholder="" onChange={handleUserChange} />
            <input type="text" name="cont5" placeholder="" onChange={handleUserChange} />
            <input type="text" name="link1" placeholder="" onChange={handleUserChange} />
            <input type="text" name="link2" placeholder="" onChange={handleUserChange} />
            <input type="text" name="link3" placeholder="" onChange={handleUserChange} />
            <input type="text" name="link4" placeholder="" onChange={handleUserChange} />
            <input type="text" name="link5" placeholder="" onChange={handleUserChange} />

            <button onClick={saveInfo}>Save</button>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewInfo: () => dispatch(actionCreators.fetchInfo())

    }
}


export default connect(null, mapDispatchToProps)(EditProfile)