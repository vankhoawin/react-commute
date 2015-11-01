import React, { Component } from 'react';

import { CommuterCell } from '../components';


export default class CommuterRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { row, isHeader } = this.props;

    return (
      <tr>
        { row.map((cell, index) => (
          <CommuterCell
            key={ index }
            cell={ cell }
            isHeader={ isHeader }
          />
        )) }
      </tr>
    );
  }
}
