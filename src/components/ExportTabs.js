import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import styles from '../styles/ExportTabs.scss';


@CSSModules(styles)
export default class ExportTabs extends Component {
  constructor(props) {
    super(props);
    this.translateToCSV = this.translateToCSV.bind(this);
  }

  translateToCSV(headers, rows) {
    let translated = '';
    let row;

    for (let header of headers) {
      translated += (header + ' ');
    }
    translated += '\n';

    for (let row of rows) {
      for (let cell of row) {
        translated += (cell + ' ');
      }
      translated += '\n';
    }

    return translated;
  }

  render() {
    const { commuteData } = this.props;
    const { headers, rows } = commuteData;
    const dataCSV = this.translateToCSV(headers, rows);
    const dataJSON = JSON.stringify([headers, ...rows], null, 2);
    const processedJSON = JSON.stringify(commuteData, null, 2);

    return (
      <Tabs
        styleName="export-tabs"
        defaultActiveKey={ 1 }
        animation={ false }>

        <Tab eventKey={ 1 } title="CSV">
          <pre>{ dataCSV }</pre>
        </Tab>
        <Tab eventKey={ 2 } title="JSON">
          <pre>{ dataJSON }</pre>
        </Tab>
        <Tab eventKey={ 3 } title="Processed Data">
          <pre>{ processedJSON }</pre>
        </Tab>
      </Tabs>
    );
  }
}