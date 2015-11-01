import React, { Component } from 'react';

export default class CommuterCell extends Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };
    this.enableEditing = this.enableEditing.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  enableEditing(e) {
    this.setState({ isSelected: !this.state.isSelected });
  }

  handleEdit(e) {
  }

  render() {
    const { isSelected } = this.state;
    const { cell, isHeader } = this.props;

    if (isHeader) {
      return <th>{ cell }</th>;
    } else if (isSelected) {
      return (
        <td onClick={ this.enableEditing }>
          <input type="text" value={ cell } onChange={ this.handleEdit } />
        </td>
      );
    } else {
      return <td onClick={ this.enableEditing }>{ cell }</td>;
    }
  }
}
