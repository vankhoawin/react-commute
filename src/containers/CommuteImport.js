import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { CommuteDataInput } from '../components';


@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteImport extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commuteData } = this.props;
    const { stats } = commuteData;

    return (
      <Row>
        <Col md={6}>
          <CommuteDataInput commuteData={ commuteData } />
        </Col>
        <Col md={6}>
          { JSON.stringify(commuteData) }
        </Col>
      </Row>
    );
  }
}
