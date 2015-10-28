import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import CommuteImport from './CommuteImport';
import CommuteStatistics from './CommuteStatistics';


class CommuterLinks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={12} lg={1}>
          <nav>
            <ul>
              <li><Link to="/">Import</Link></li>
              <li><Link to="/statistics">Statistics</Link></li>
            </ul>
          </nav>
        </Col>
        <Col xs={12} lg={11}>
          { this.props.children }
        </Col>
      </Row>
    );
  }
}

export default class CommuterRouter extends Component {
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
