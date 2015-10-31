import React, { Component } from 'react';
import { CommuterRow } from '../components';

export default class CommuterTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rows, headers, rowTimes } = this.props.commuteData;
    const combinedRows = rows.map((row, index) => (
      [...row, rowTimes[index]]
    ));
    const combinedHeaders = [...headers, 'Total'];

    return (
      <table className="table">
        <thead>
          <CommuterRow isHeader={ true } row={ combinedHeaders } />
        </thead>

        <tbody>
          { combinedRows.map((row, index) => (
            <CommuterRow isHeader={ false } key={ index } row={ row } />
          )) }
        </tbody>
      </table>
    );
  }
}
