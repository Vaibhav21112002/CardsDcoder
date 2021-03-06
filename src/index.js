import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Counters from './Components/counter'
import 'bootstrap/dist/css/bootstrap.css';
import Cards from './Components/finalcards';
import Navbar from './Components/navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Cards />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
