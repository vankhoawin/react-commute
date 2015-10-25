import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

import CommuteImport from './CommuteImport';
import CommuteStatistics from './CommuteStatistics';


class CommuterLinks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Import</Link></li>
          <li><Link to="/statistics">Statistics</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default class CommuterApp extends Component {
  render() {
    return (
      <Router>
        <Route component={ CommuterLinks }>
          <Route path="/" component={ CommuteImport } />
          <Route path="/statistics" component={ CommuteStatistics } />
        </Route>
      </Router>
    );
  }
}
