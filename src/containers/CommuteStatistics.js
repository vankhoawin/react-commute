import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import {
  LanePieChart,
  CommuteLineChart,
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
    const firstCol = stats.colTimes[0];

    return (
      <Row>
        <Col md={6}>
          <CommuterTable commuteData={ commuteData } />
        </Col>
        <Col md={6}>
          <LanePieChart lanes={ lanes } />
          <CommuteLineChart 
            rowTimes={ rowTimes }
            title="Average Commute Times"
            xAxisLabel="Day"
            yAxisLabel="Total Time (hours)"
          />
          <CommuteLineChart 
            rowTimes={ firstCol }
            title="5 Commute Time"
            xAxisLabel="Day"
            yAxisLabel="Total Time (minutes)"
          />
        </Col>
      </Row>
    );
  }
}
