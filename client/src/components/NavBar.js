import { Component } from "react";
import { NavLink } from "react-router-dom";
import '../styles/NavBar.css'
import { connect } from 'react-redux';


function Navbar(props) {
     
        return (
            <div className="Nav">
                {props.isLoggedIn ? null : <NavLink to="/"><div className="LogInMenu">Login</div></NavLink> }
                {props.isLoggedIn ? null : <NavLink to="/register"><div className="RegisterMenu">Register</div></NavLink> }
                {props.isLoggedIn ? <NavLink to="/home"><div className="home">Home</div></NavLink>: null }
                {props.isLoggedIn ? <NavLink to="/create-a-post"><div className="createPost">Create A Post</div></NavLink> : null }
                {props.isLoggedIn ? <NavLink to="/profile"><div className="profilePage">Profile</div></NavLink> : null }
                {props.isLoggedIn ? <NavLink to="/edit-profile"><div className="editProfile">Edit Profile</div></NavLink> : null }
            </div>
        )                            
    
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Navbar)
