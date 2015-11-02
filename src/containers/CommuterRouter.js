import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { Row, Col } from 'react-bootstrap';

import CommuteImport from './CommuteImport';
import CommuteStatistics from './CommuteStatistics';
import CommuteData from './CommuteData';
import CommuteExport from './CommuteExport';
import { Header } from '../components';


export default class CommuterRouter extends Component {
  render() {
    return (
      <Router history={ createHistory() }>
        <Route component={ Header }>
          <Route path="/" component={ CommuteImport } />
          <Route path="/statistics" component={ CommuteStatistics } />
          <Route path="/data" component={ CommuteData } />
          <Route path="/export" component={ CommuteExport } />
        </Route>
      </Router>
    );
  }
}
