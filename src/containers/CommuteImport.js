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
        <Col xs={12}>
          <CommuteDataInput commuteData={ commuteData } />
        </Col>
      </Row>
    );
  }
}
