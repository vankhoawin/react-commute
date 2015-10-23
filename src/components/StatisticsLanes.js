import React, { Component } from 'react';
import { BarChart } from 'react-d3';

export default class StatisticsLanes extends Component {
  constructor(props) {
    super(props);
    this.getTopLanes = this.getTopLanes.bind(this);
    this.renderLanes = this.renderLanes.bind(this);
  }

  getTopLanes(lanes) {
    let lanesArr = [];
    Object.keys(lanes).forEach(laneNum => {
      lanesArr.push([laneNum, lanes[laneNum]]);
    })

    return lanesArr.sort((a, b) => {
      if      (a[1] < b[1]) return 1;
      else if (a[1] > b[1]) return -1;
      else                  return 0;
    });
  }

  renderLanes(lane, index) {
    return (
      <tr key={index} >
        <td>{ lane[0] }</td>
        <td>{ lane[1] }</td>
      </tr>
    );
  }

  render() {
    const { lanes } = this.props;
    const topLanes = this.getTopLanes(lanes);

    return (
      <table>
        <thead>
          <tr>
            <th>Lane</th>
            <th>Times driven</th>
          </tr>
        </thead>

        <tbody>
          { topLanes.map(this.renderLanes) }
        </tbody>
      </table>
    );
  }
}