import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StatisticsPie } from '../components';


@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteStatistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stats } = this.props.commuteData;
    const { lanes } = stats;

    return (
      <div>
        <StatisticsPie lanes={ lanes } />
      </div>
    );
  }
}
