import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import DefaultPage from './components/DefaultPage/DefaultPage';

class App extends Component {

  render() {
    return (
          <DefaultPage />
    );
  }
}

export default App;
