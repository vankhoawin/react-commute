import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LanePieChart, AverageCommuteLineChart } from '../components';


@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteStatistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stats } = this.props.commuteData;
    const { lanes, rowTimes } = stats;

    return (
      <div>
        <LanePieChart lanes={ lanes } />
        <AverageCommuteLineChart rowTimes={ rowTimes } />
      </div>
    );
  }
}
