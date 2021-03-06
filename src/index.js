import './index.css';
import 'normalize.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, compose, createStore } from 'redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,
  compose(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
