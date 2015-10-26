import React, { Component } from 'react';
import { CommuterRow } from '../components';

export default class CommuterTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rows, headers } = this.props.commuteData;

    return (
      <table className="table">
        <thead>
          <CommuterRow isHeader={ true } row={ headers } />
        </thead>

        <tbody>
          { rows.map((row, index) => (
            <CommuterRow isHeader={ false } key={ index } row={ row } />
          )) }
        </tbody>
      </table>
    );
  }
}
