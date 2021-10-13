import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { Route } from 'react-router';
import thunk from 'redux-thunk';
import reducer from './store/reducers/postsReducer'
import BaseLayout from './components/BaseLayout';
import AddPost from './components/AddPost';
import EditProfile from './components/EditProfile';
import Profile from './components/Profile';
import App from './components/App';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Route component={ App } exact path='/' />
          <Route component={ AddPost } path="/create-a-post" />
          <Route component={ EditProfile} path="/edit-profile" />
          <Route component={ Profile } path="/profile" />
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
