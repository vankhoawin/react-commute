import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'react-bootstrap';

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
    const rowLength = rows.length
      ? Math.max(rows[0].length - 2, 0)
      : 0;

    // holds all row data
    let totalRows = [];

    // holds which lane was taken to commute
    let lanes = {};

    // holds average of times for each column
    let averageTimes = new Array(rowLength).fill(0);

    // holds all times for each column
    let colTimes = [];
    for (var i = 0; i < rowLength; ++i) {
      colTimes.push([]);
    }

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
    let date;
    let lane;
    let averageTime;
    let year, month, day;

    rows.map((row, index) => {
      [ date, lane, ...averageTime ] = row;
      [ month, day, year ] = date.split('/');

      rowTime = 0;

      for (let i = 0; i < rowLength; ++i) {
        lapTime = toSeconds(averageTime[i]);

        colTimes[i].push(lapTime);

        averageTimes[i] += lapTime;

        if (i > 1) {
          rowTime += lapTime;
        }
      }

      lanes[lane] ? ++lanes[lane] : lanes[lane] = 1;
      rowTimes.push({
        x: new Date(year, month, day),
        y: rowTime / 3600
      });
      totalRows.push(row);

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
    averageTimes = averageTimes.map(averageTime => (
      toHHMMSS(averageTime / rows.length)
    ));

    return {
      totalRows,
      lanes,
      rowTimes,
      colTimes,
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

    window.location.assign('/#/statistics');
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