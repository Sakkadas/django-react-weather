import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StickyFooter from './components/footer'
import Header from './components/header'

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <App/>
        <StickyFooter/>
    </React.StrictMode>,
    document.getElementById('root')
);
