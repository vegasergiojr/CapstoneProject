

import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import '../styles/Profile.css'

function Profile(props){

    useEffect(() => {
        props.onAllInfo()
    }, [])

    const userInfo = props.info.map(edit => {
        return <div id="infoUL">
            <li key= {edit.id}>
                <div id="aboutYou">{edit.about_me}</div>
                <div><a href={edit.cont1}></a></div>
                <div><a href={edit.cont2}></a></div>
                <div><a href={edit.cont3}></a></div>
                <div><a href={edit.cont4}></a></div>
                <div><a href={edit.cont5}></a></div>
                <div id="linkIcons">
                <div><a href={edit.link1}><img src="https://img.icons8.com/nolan/96/github.png" alt="github icon" /></a></div>
                <div><a href={edit.link2}><img src="https://img.icons8.com/nolan/96/instagram-new.png"/></a></div>
                <div><a href={edit.link3}><img src="https://img.icons8.com/nolan/96/linkedin.png"/></a></div>
                <div><a href={edit.link4}><img src="https://img.icons8.com/nolan/96/email.png"/></a></div>
                <div><a href={edit.link5}><img src="https://img.icons8.com/nolan/96/facebook-new.png"/></a></div></div>

            </li>
        </div>
    })

    return(
        <div>{userInfo}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        info: state.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAllInfo: () => dispatch(actionCreators.fetchInfo())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)