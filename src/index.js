import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from "./redux/reducer";
import './index.css';
import App from './App';
import reducer from './redux/reducer';


const store= createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

