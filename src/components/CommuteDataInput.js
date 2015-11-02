import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'react-bootstrap';

import { importData } from '../actions';
import calculateStatistics from '../utils/calculateStatistics';

@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteDataInput extends Component {
  constructor(props) {
    super(props);
    this.handleCommuteInput = this.handleCommuteInput.bind(this);
    this.processCSV = this.processCSV.bind(this);
  }

  processCSV(commuteData) {
    let [ headersRaw, ...rowsRaw ] = commuteData.split('\n');
    let headers = headersRaw.split(',');
    rowsRaw = rowsRaw.map(row => (row.split(',')));

    return { headers, rowsRaw };
  }

  handleCommuteInput(e) {
    const { dispatch } = this.props;
    let commuteData = document.getElementById('commute-data-text').value;
    let { headers, rowsRaw } = this.processCSV(commuteData);
    let stats = calculateStatistics(headers, rowsRaw);

    dispatch(importData(stats));

    window.location.assign('/#/data');
  }

  render() {
    return (
      <div>
        <Input id="commute-data-text" type="textarea" rows="30" placeholder="Paste CSV here" />
        <Button onClick={ this.handleCommuteInput } bsStyle="primary">Import CSV Data</Button>
      </div>
    );
  }
}