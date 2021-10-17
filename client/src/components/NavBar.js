import { Component } from "react";
import { NavLink} from "react-router-dom";
import '../styles/NavBar.css'

export class Navbar extends Component {
    render() {
        return (
            <div className="Nav">
                <NavLink to ="/"><div className="home">Home</div></NavLink>
                <NavLink to = "/create-a-post"><div className="createPost">Create A Blog</div></NavLink>
                <NavLink to ="/profile"><div className="profilePage">Portfolio</div></NavLink>
                <NavLink to ="/edit-profile"><div className="editProfile">Edit Portfolio</div></NavLink>
            </div>        
            )
    }
}

export default Navbar
