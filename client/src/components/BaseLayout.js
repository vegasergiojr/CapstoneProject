
import NavBar from "./NavBar"
import '../styles/BaseLayout.css'

function BaseLayout(props) {
    return (
        <div id="layout">
            <NavBar />
            <div id="children">{props.children}</div>
            <footer></footer>
        </div>
    )
}

export default BaseLayout

