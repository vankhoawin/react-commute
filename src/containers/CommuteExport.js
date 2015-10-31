import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { ExportTabs } from '../components';


@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteImport extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commuteData } = this.props;

    return (
      <Row>
        <Col xs={12}>
          <ExportTabs commuteData={ commuteData } />
        </Col>
      </Row>
    );
  }
}
