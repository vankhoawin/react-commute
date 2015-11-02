import React, { Component } from 'react';
import { CommuterRow } from '../components';
import CSSModules from 'react-css-modules';

import styles from '../styles/CommuterTable.scss';


@CSSModules(styles)
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
      <table className="table" styleName="commuter-table">
        <thead>
          <CommuterRow isHeader={ true } row={ combinedHeaders } />
        </thead>

        <tbody styleName="commuter-body">
          { combinedRows.map((row, index) => (
            <CommuterRow
              isHeader={ false }
              key={ index }
              index={ index }
              row={ row }
            />
          )) }
        </tbody>
      </table>
    );
  }
}
