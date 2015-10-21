import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommuterTable, Header } from '../components';

@connect(state => ({ commuteData: state.commuteData }))
export default class CommuterApp extends Component {

  render() {
    const { commuteData } = this.props;

    return (
      <div>
        <Header />
        <CommuterTable commuteData={ commuteData } />
      </div>
    );
  }

}
