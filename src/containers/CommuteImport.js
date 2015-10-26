import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CommuterTable, CommuteDataInput } from '../components';


@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteImport extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commuteData } = this.props;
    const { stats } = commuteData;

    return (
      <div>
        <CommuteDataInput commuteData={ commuteData } />
        <CommuterTable commuteData={ commuteData } />
        { JSON.stringify(commuteData) }
      </div>
    );
  }
}
