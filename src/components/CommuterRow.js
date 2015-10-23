import React, { Component } from 'react';

const CommuterCell = ({ cell }) => (
  <td>{ cell }</td>
);

export default class CommuterRow extends Component {
  constructor(props) {
    super(props);
    this.renderBody = this.renderBody.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderBody(row) {
    return row.map((cell, index) => (
      <td key={ index }>{ cell }</td>
    ));
  }

  renderHeader(row) {
    return row.map((cell, index) => (
      <th key={ index }>{ cell }</th>
    ));
  }

  render() {
    const { row, isHeader } = this.props;

    return (
      <tr>
        { isHeader ? this.renderHeader(row) : this.renderBody(row) }
      </tr>
    );
  }
}
