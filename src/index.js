import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import jwtDecode from 'jwt-decode'
import {setCurrentUser} from './store/actions/authAction'
import {setAuthorizationToken} from './utils/auth'

const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.jwtToken){
    console.log(localStorage.jwtToken)
    console.log(jwtDecode(localStorage.jwtToken, {complete: true}))
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
