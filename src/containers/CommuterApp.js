import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommuterTable, CommuteDataInput, CommuteStatistics, Header } from '../components';

@connect(state => ({ commuteData: state.commuteData }))
export default class CommuterApp extends Component {

  render() {
    const { commuteData } = this.props;
    const { stats } = commuteData;

    return (
      <div>
        <Header />
        <CommuteDataInput commuteData={ commuteData } />
        <CommuteStatistics stats={ stats } />
        <CommuterTable commuteData={ commuteData } />
      </div>
    );
  }

}
