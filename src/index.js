import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/index';
import './index.scss';
import reportWebVitals from './reportWebVitals';

WebFont.load({
  google: {
    families: ["Playfair Display:400,500", 'serif', "Assistant:200,300,400, 800", "sans-serif"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
