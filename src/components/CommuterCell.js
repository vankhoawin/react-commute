import React, { Component } from 'react';

export default class CommuterRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cell } = this.props;

    return (
      <td>{ cell }</td>
    );
  }
}