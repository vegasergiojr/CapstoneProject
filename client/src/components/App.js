
import '../styles/App.css';
import Login from './Login';
import Posts from './Posts';
import NewsList from './NewsList';


function App() {
    return (
        <div className="App">
            <Login />
            <Posts />
            <div id="newslist'"><NewsList/></div>
        </div>
    );
}

export default App;
