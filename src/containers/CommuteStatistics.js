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
    const {
      rows,
      headers,
      rowTimes,
      lanes,
      rowTimesLineData,
      colTimes
    } = this.props.commuteData;

    return (
      <Row>
        <Col md={6}>
          <CommuterTable commuteData={ { rows, headers, rowTimes } } />
        </Col>
        <Col md={6}>
          <LanePieChart lanes={ lanes } />
          <CommuteLineChart 
            rowTimes={ rowTimesLineData }
            title="Average Commute Times"
            xAxisLabel="Day"
            yAxisLabel="Total Time (hours)"
          />
          <CommuteLineChart 
            rowTimes={ colTimes[0] }
            title="5 Commute Time"
            xAxisLabel="Day"
            yAxisLabel="Total Time (minutes)"
          />
        </Col>
      </Row>
    );
  }
}
