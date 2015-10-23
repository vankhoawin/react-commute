import React, { Component } from 'react';
import { connect } from 'react-redux';
import { importData } from '../actions';

@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteDataInput extends Component {
  constructor(props) {
    super(props);
    this.calculateStatistics = this.calculateStatistics.bind(this);
    this.handleCommuteInput = this.handleCommuteInput.bind(this);
  }

  calculateStatistics(rows) {
    let lanes = {};
    let startTimes = 0;
    let commuteTimes = [];

    rows.map(row => {
      let [ , lane, startTime, ...commuteTime ] = row;
      let [ hours, minutes, seconds ] = startTime.split(':')

      lanes[lane] ? ++lanes[lane] : lanes[lane] = 1;
      startTimes += hours*2400 + minutes*60 + seconds;
      commuteTimes.push(commuteTime);
    });

    return {
      lanes,
      startTimes: startTimes / startTimes.length / 2400,
      commuteTimes
    }
  }

  handleCommuteInput(e) {
    const { dispatch } = this.props;
    let commuteData = document.getElementById('commute-data-text').value;
    let [ headersRaw, ...rowsRaw ] = commuteData.split('\n');
    let headers = headersRaw.split(',');
    let rows = rowsRaw.map(row => (row.split(',')));

    let stats = this.calculateStatistics(rows);

    dispatch(importData({
      headers,
      rows,
      stats
    }));
  }

  render() {
    return (
      <div>
        <textarea id="commute-data-text" />
        <button onClick={ this.handleCommuteInput }>Import Data</button>
      </div>
    );
  }
}