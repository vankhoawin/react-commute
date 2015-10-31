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
    this.processCSV = this.processCSV.bind(this);
  }

  processCSV(commuteData) {
    let [ headersRaw, ...rowsRaw ] = commuteData.split('\n');
    let headers = headersRaw.split(',');
    rowsRaw = rowsRaw.map(row => (row.split(',')));

    return { headers, rowsRaw };
  }

  calculateStatistics(commuteData) {
    let { headers, rowsRaw } = this.processCSV(commuteData);

    const rowLength = rowsRaw.length
      ? Math.max(rowsRaw[0].length - 2, 0)
      : 0;

    // holds all row data
    let rows = [];

    // holds which lane was taken to commute
    let lanes = {};

    // holds average of times for each column
    let averageTimes = new Array(rowLength).fill(0);

    // holds all times for each time column
    let colTimes = [];
    for (var i = 0; i < rowLength - 1; ++i) {
      colTimes.push([]);
    }

    // holds total time for each row (in hours)
    let rowTimesLineData = [];

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
    let rowDate;

    rowsRaw.map((row, index) => {
      [ date, lane, ...averageTime ] = row;
      [ month, day, year ] = date.split('/');
      rowDate = new Date(year, month, day);
      rowTime = 0;

      for (let i = 0; i < rowLength; ++i) {
        lapTime = toSeconds(averageTime[i]);

        averageTimes[i] += lapTime;

        if (i > 0) {
          colTimes[i-1].push({
            x: rowDate,
            y: lapTime / 60
          });
        }

        if (i > 1) {
          rowTime += lapTime;
        }
      }

      lanes[lane] ? ++lanes[lane] : lanes[lane] = 1;

      rowTimesLineData.push({
        x: rowDate,
        y: rowTime / 3600
      });
      rows.push([...row, toHHMMSS(rowTime)]);

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
      toHHMMSS(averageTime / rowsRaw.length)
    ));

    headers.push('Total');

    return {
      rows,
      headers,
      lanes,
      rowTimesLineData,
      colTimes,
      averageTimes,
      longestCommute,
      shortestCommute
    }
  }

  handleCommuteInput(e) {
    const { dispatch } = this.props;
    let commuteData = document.getElementById('commute-data-text').value;
    let stats = this.calculateStatistics(commuteData);

    dispatch(importData(stats));

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