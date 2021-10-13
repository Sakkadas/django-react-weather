import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StickyFooter from './components/footer'

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <StickyFooter/>
    </React.StrictMode>,
    document.getElementById('root')
);
