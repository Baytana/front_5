import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';


const store= createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
