
import '../styles/App.css';
import Posts from './Posts';
import NewsList from './NewsList';


function App() {
    return (
        <div className="App">
            <div>
                <h2>Recent Blogs</h2>
                <Posts /></div>
            
            <div id="newslist">
                <h2>Recent News</h2>
                <NewsList /></div>
            <br></br>
        </div>
    );
}

export default App;
