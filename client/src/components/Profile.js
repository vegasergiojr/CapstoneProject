

import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';


function Profile(props){

    useEffect(() => {
        props.onAllInfo()
    }, [])

    const userInfo = props.info.map(edit => {
        return <ul id="infoUL">
            <li key= {edit.id}>
                <div>{edit.about_me}</div>
                <div>{edit.cont1}</div>
                <div>{edit.cont2}</div>
                <div>{edit.cont3}</div>
                <div>{edit.cont4}</div>
                <div>{edit.cont5}</div>
                <div>{edit.link1}</div>
                <div>{edit.link2}</div>
                <div>{edit.link3}</div>
                <div>{edit.link4}</div>
                <div>{edit.link5}</div>

            </li>
        </ul>
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