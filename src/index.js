import React from 'react';//Imports the React library, which is necessary for writing React components.
import ReactDOM from 'react-dom/client';//Imports the ReactDOM library, specifically the createRoot method for working with Concurrent Mode.
import 'bootstrap/dist/css/bootstrap.min.css';//Imports the Bootstrap CSS file to style the application with Bootstrap.
import './index.css';//local css style sheet
import AppRoutes from './AppRoutes';//import local coponent appRoutes
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));//Uses ReactDOM.createRoot to create a root to render the application into. This is part of Concurrent Mode in React.
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//<React.StrictMode> is used to highlight potential problems in the application during development.
/*Concurrent mode is not just a new feature, it's a whole new way of thinking about React. It allows React to work on multiple tasks at once, without blocking the main thread. It introduces powerful new features like automatic batching, streaming server rendering, and React Suspense*/