import React, { Component } from 'react';

const CommuterCell = ({ cell }) => (
  <td>{ cell }</td>
);

export default class CommuterRow extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderCells = this.renderCells.bind(this);
  }

  render() {
    const { isHeader } = this.props;

    return isHeader ? this.renderHeader() : this.renderRow();
  }

  renderRow() {
    return (
      <tr>
        { this.renderCells() }
      </tr>
    );
  }

  renderHeader() {
    return (
      <th>
        { this.renderCells() }
      </th>
    );
  }

  renderCells() {
    const { row } = this.props;

    return row.map(cell => (<CommuterCell cell={ cell } /> ));
  }
}
