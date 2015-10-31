import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default class ExportTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commuteData } = this.props;

    return (
      <Tabs defaultActiveKey={ 1 } animation={ false }>
        <Tab eventKey={1} title="CSV">ok
        </Tab>
        <Tab eventKey={2} title="JSON">
          { JSON.stringify(commuteData) }
        </Tab>
      </Tabs>
    );
  }
}