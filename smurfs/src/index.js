import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import "./index.css";
import { reducer } from './reducers/reducers'
import App from "./components/App";
import { Provider } from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
