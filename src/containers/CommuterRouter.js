import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import CommuteImport from './CommuteImport';
import CommuteStatistics from './CommuteStatistics';
import { Header } from '../components';


export default class CommuterRouter extends Component {
  render() {
    return (
      <Router>
        <Route component={ Header }>
          <Route path="/" component={ CommuteImport } />
          <Route path="/statistics" component={ CommuteStatistics } />
        </Route>
      </Router>
    );
  }
}
