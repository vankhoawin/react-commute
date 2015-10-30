import React, { Component } from 'react';
import { LineChart } from 'react-d3';

export default class CommuteLineChart extends Component {
  constructor(props) {
    super(props);
    this.processLineData = this.processLineData.bind(this);
  }

  processLineData(data) {
    return [{
      name: 'Average Commute Time',
      values: data,
      strokeWidth: 2,
      strokeDashArray: '2,1'
    }];
  }

  render() {
    const { rowTimes, title, xAxisLabel, yAxisLabel } = this.props;
    const lineData = this.processLineData(rowTimes);
    const boxObjectSize = {
      x: 0,
      y: 0,
      width: 1000,
      height: 400
    }

    return (
      <LineChart
        data={ lineData }
        width={ 500 }
        height={ 400 }
        viewBoxObject={ boxObjectSize }
        title={ title }
        yAxisLabel={ yAxisLabel }
        xAxisLabel={ xAxisLabel }
        gridHorizontal={ true }
      />
    );
  }
}
