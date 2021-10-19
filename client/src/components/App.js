
import '../styles/App.css';
import Login from './Login';
import Posts from './Posts';
import NewsList from './NewsList';
import Register from './Register';


function App() {
    return (
        <div className="App">

            <Posts />

            <div id="newslist"><NewsList /></div>
            <br></br>
        </div>
    );
}

export default App;
