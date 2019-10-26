import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux' 
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux';

ReactDOM.render(<App />, document.getElementById("root"));
