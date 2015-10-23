import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommuterTable, CommuteDataInput, Header } from '../components';

@connect(state => ({ commuteData: state.commuteData }))
export default class CommuterApp extends Component {

  render() {
    const { commuteData } = this.props;

    return (
      <div>
        <Header />
        <CommuteDataInput commuteData={ commuteData } />
        <CommuterTable commuteData={ commuteData } />
      </div>
    );
  }

}
