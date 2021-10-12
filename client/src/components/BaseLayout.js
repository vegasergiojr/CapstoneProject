
function BaseLayout(props) {
    return (
        <div id="layout">
            
            {props.children}
            <footer></footer>
        </div>
    )
}

export default BaseLayout