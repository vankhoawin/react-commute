import React, { Component } from 'react';
import { CommuterCell } from '../components';

export default class CommuterRow extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  render() {
    const { isHeader } = this.props;

    return isHeader ? this.renderHeader() : this.renderRow();
  }

  renderRow() {
    const { row } = this.props;

    return (
      <tr>
        { row.map((cell) => {
          return <CommuterCell cell={ cell } />
        }) }
      </tr>
    );
  }

  renderHeader() {
    const { row } = this.props;

    return (
      <th>
        { row.map((cell) => {
          return <CommuterCell cell={ cell } />
        }) }
      </th>
    );
  }
}
