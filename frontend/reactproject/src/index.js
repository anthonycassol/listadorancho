import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderReactDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

var database = null;
function initDatabase() {
  database = window.sqlitePlugin.openDatabase({name: 'sample.db', location: 'default'});
  
  database.transaction(function(transaction) {
      transaction.executeSql('CREATE TABLE SampleTable (name, score)');
  });
}

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
    initDatabase();
  }, false);
} else {
  renderReactDom();
}
