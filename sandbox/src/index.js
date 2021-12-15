import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store'
import LifecycleTest from './Components/Lifecycle/LifecycleTest';

render(
  <React.StrictMode>
    <Provider store ={store}>
    <LifecycleTest />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
