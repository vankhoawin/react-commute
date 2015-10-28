import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import {
  LanePieChart,
  AverageCommuteLineChart,
  CommuterTable
} from '../components';


@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteStatistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commuteData } = this.props;
    const { stats } = commuteData;
    const { lanes, rowTimes } = stats;

    return (
      <Row>
        <Col md={6}>
          <CommuterTable commuteData={ commuteData } />
        </Col>
        <Col md={6}>
          <LanePieChart lanes={ lanes } />
          <AverageCommuteLineChart rowTimes={ rowTimes } />
        </Col>
      </Row>
    );
  }
}
