

import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import '../styles/Profile.css'

function Profile(props){

    // const mostRecent = () => {

    // }

    useEffect(() => {
        props.onAllInfo()
    }, [])

    const userInfo = props.info.map(edit => {
        return <div id="infoUL">
            <li key= {edit.id}>
            <div>
                <h2>Network</h2>
                <div id="linkIcons">
                <div><a href={edit.link1}><img src="https://img.icons8.com/nolan/96/github.png" alt="GitHub"/></a></div>
                <div><a href={edit.link2}><img src="https://img.icons8.com/nolan/96/linkedin.png" alt="LinkedIn"/></a></div>
                <div><a href={edit.link3}><img src="https://img.icons8.com/nolan/96/briefcase.png" alt="portfolio"/></a></div>
                <div><a href={edit.link4}><img src="https://img.icons8.com/nolan/96/facebook-new.png" alt="Facebook"/></a></div>
                <div><a href={edit.link5}><img src="https://img.icons8.com/nolan/96/instagram-new.png" alt="instagram"/></a></div></div>
                </div>
                <div>
                <h2>About Me</h2>
                <div id="aboutYou">{edit.about_me}</div>
                <div>
                <h2>Project Contributions</h2>

                <div id="linkcont">
                <a href={edit.cont1}><img src="https://img.icons8.com/nolan/96/repository.png" alt="repo"/></a>
                <a href={edit.cont2}><img src="https://img.icons8.com/nolan/96/repository.png" alt="repo"/></a>
                <a href={edit.cont3}><img src="https://img.icons8.com/nolan/96/repository.png" alt="repo"/></a>
                <a href={edit.cont4}><img src="https://img.icons8.com/nolan/96/repository.png" alt="repo"/></a>
                <a href={edit.cont5}><img src="https://img.icons8.com/nolan/96/repository.png" alt="repo"/></a></div></div>
                </div>

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