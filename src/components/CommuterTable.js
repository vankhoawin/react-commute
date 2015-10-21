import React, { Component } from 'react';
import { CommuterRow } from '../components';

export default class CommuterTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rows, headers } = this.props.commuteData;

    return (
      <table>
        <CommuterRow isHeader={ true } row={ headers } />

        { rows.map(row => (
          <CommuterRow isHeader={ false } row={ row } />
        )) }
      </table>
    );
  }
}
