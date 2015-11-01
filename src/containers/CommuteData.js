import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { CommuterTable } from '../components';


@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteStatistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      rows,
      headers,
      rowTimes
    } = this.props.commuteData;

    return (
      <Row>
        <Col xs={ 12 }>
          <CommuterTable commuteData={ { rows, headers, rowTimes } } />
        </Col>
      </Row>
    );
  }
}
