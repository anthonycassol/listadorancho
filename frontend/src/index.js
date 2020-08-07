import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'cordova_script';


document.addEventListener('deviceready', () => {

    ReactDOM.render(
        <div>
            <App cordovaWork={true} />
        </div>,
        document.getElementById('root')
    );
}, false);