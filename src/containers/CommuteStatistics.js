import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  LanePieChart,
  AverageCommuteLineChart,
  CommuterTable
} from '../components';


@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteStatistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commuteData } = this.props;
    const { stats } = commuteData;
    const { lanes, rowTimes } = stats;

    return (
      <div>
        <div>
          <CommuterTable commuteData={ commuteData } />
        </div>
        <div>
          <LanePieChart lanes={ lanes } />
          <AverageCommuteLineChart rowTimes={ rowTimes } />
        </div>
      </div>
    );
  }
}
