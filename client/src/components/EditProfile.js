import { connect } from 'react-redux';
import { useState } from 'react';
import * as actionCreators from "../store/creators/actionCreators";
import '../styles/EditProfile.css'

function EditProfile(props) {

    const [info, setInfo] = useState({
        about_me: "",
        cont1: "",
        cont2: "",
        cont3: "",
        cont4: "",
        cont5: "",
        link1: "",
        link2: "",
        link3: "",
        link4: "",
        link5: "",
    })

    const handleUserChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        })
    }

    const saveInfo = () => {
        fetch('http://localhost:8080/api/info', {
            method: "PUT",
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
            <div>
            <h3>TELL ME ABOUT YOURSELF :</h3>
            <textarea type="text" name="about_me" value={info.about_me} placeholder="Describe Yourself" onChange={handleUserChange}/>
            </div>
            <div>
            <h3>PROJECTS YOU WOULD LIKE TO SHARE :</h3>
            <input type="text" name="cont1" value={info.cont1} placeholder="Project Contribution #" onChange={handleUserChange} />
            <br></br>
            <input type="text" name="cont2" value={info.cont2} placeholder="Project Contribution #" onChange={handleUserChange} />
            <br></br>
            <input type="text" name="cont3" value={info.cont3} placeholder="Project Contribution #" onChange={handleUserChange} />
            <br></br>
            <input type="text" name="cont4" value={info.cont4} placeholder="Project Contribution #" onChange={handleUserChange} />
            <br></br>
            <input type="text" name="cont5" value={info.cont5} placeholder="Project Contribution #" onChange={handleUserChange} />
            <br></br>
            </div>
            
            <br></br>
            <div>
            <h3>LINKS YOU CAN BE REACHED THROUGH :</h3>
            <input type="text" name="link1" value={info.link1} placeholder="GitHub URL" onChange={handleUserChange} />
            <br></br>
            <input type="text" name="link2" value={info.link2} placeholder="Linked In URL" onChange={handleUserChange} />
            <br></br>
            <input type="text" name="link3" value={info.link3} placeholder="Portfolio URL" onChange={handleUserChange} />
            <br></br>
            <input type="text" name="link4" value={info.link4} placeholder="Facebook URL" onChange={handleUserChange} />
            <br></br>
            <input type="text" name="link5" value={info.link5} placeholder="InstagramURL" onChange={handleUserChange} />
            <br></br>
            <br></br>
            <button onClick={saveInfo}>SAVE</button>
            </div>
            

        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewInfo: () => dispatch(actionCreators.fetchInfo())

    }
}


export default connect(null, mapDispatchToProps)(EditProfile)