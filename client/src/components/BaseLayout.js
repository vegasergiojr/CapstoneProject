
import NavBar from "./NavBar"

function BaseLayout(props) {
    return (
        <div id="layout">
            <NavBar />

            {props.children}
            <footer></footer>
        </div>
    )
}

export default BaseLayout
