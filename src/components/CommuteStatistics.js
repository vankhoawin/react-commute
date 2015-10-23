import React, { Component } from 'react';
import { StatisticsLanes } from '../components';

export default class CommuteStatistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stats } = this.props;
    const { lanes } = stats;

    return (
      <div>
        <StatisticsLanes lanes={ lanes } />
      </div>
    );
  }
}