import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import ImagePage from './components/Pages/ImagePage';

import DefaultPage from './components/Pages/DefaultPage';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <Link to='/'>Home</Link>
        <Link to="/ImagePage">Images</Link>
        <Switch>
          <Route path="/" component={DefaultPage} exact/>
          <Route path="/ImagePage" component={ImagePage} exact/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
