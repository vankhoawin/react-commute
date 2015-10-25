import React, { Component } from 'react';
import { connect } from 'react-redux';

import { importData } from '../actions';
import { toSeconds, toHHMMSS } from '../utils/convertTime';

@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteDataInput extends Component {
  constructor(props) {
    super(props);
    this.calculateStatistics = this.calculateStatistics.bind(this);
    this.handleCommuteInput = this.handleCommuteInput.bind(this);
  }

  calculateStatistics(rows) {
    let rowLength = rows.length
      ? Math.max(rows[0].length - 2, 0)
      : 0;

    // holds which lane was taken to commute
    let lanes = {};

    // holds average of times for each column
    let averageTimes = new Array(rowLength).fill(0);

    // holds total time for each row
    let rowTimes = [];

    // holds longest commute time
    let longestCommute = { 
      index: -1,
      value: 0
    };

    // holds shortest commute time
    let shortestCommute = {
      index: -1,
      value: Number.MAX_SAFE_INTEGER
    };

    let rowTime;
    let lapTime;
    let lane;
    let averageTime;

    rows.map((row, index) => {
      [ , lane, ...averageTime ] = row;
      rowTime = 0;

      for (let i = 0; i < rowLength; ++i) {
        lapTime = toSeconds(averageTime[i]);

        averageTimes[i] += lapTime;

        if (i > 1) {
          rowTime += lapTime;
        }
      }

      lanes[lane] ? ++lanes[lane] : lanes[lane] = 1;
      rowTimes.push(rowTime);

      if (rowTime > longestCommute.value) {
        longestCommute.index = index;
        longestCommute.value = rowTime;
      }

      if (rowTime < shortestCommute.value) {
        shortestCommute.index = index;
        shortestCommute.value = rowTime;
      }
    });

    longestCommute.value = toHHMMSS(longestCommute.value);
    shortestCommute.value = toHHMMSS(shortestCommute.value);
    rowTimes = rowTimes.map(toHHMMSS);
    averageTimes = averageTimes.map(averageTime => (
      toHHMMSS(averageTime / rows.length)
    ));

    return {
      lanes,
      rowTimes,
      averageTimes,
      longestCommute,
      shortestCommute
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