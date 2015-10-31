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
    const { headers, rows } = this.props.commuteData;
    const dataCSV = this.translateToCSV(headers, rows);
    const dataJSON = JSON.stringify([headers, ...rows]);

    return (
      <Tabs
        styleName="export-tabs"
        defaultActiveKey={ 1 }
        animation={ false }>

        <Tab eventKey={1} title="CSV">
          <pre>{ dataCSV }</pre>
        </Tab>
        <Tab eventKey={2} title="JSON">
          <pre>{ dataJSON }</pre>
        </Tab>
      </Tabs>
    );
  }
}