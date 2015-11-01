import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import styles from '../styles/Header.scss';


@CSSModules(styles)
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <nav styleName="links">
            <ul>
              <li><Link to="/data">Data</Link></li>
              <li><Link to="/statistics">Statistics</Link></li>
              <li><a href="#">&lt;-</a></li>
              <li><a href="#">-&gt;</a></li>
              <li><Link to="/">Import</Link></li>
              <li><Link to="/export">Export</Link></li>
              <li><a href="#">Reset</a></li>
            </ul>
          </nav>
        </Col>
        <Col xs={12}>
          { this.props.children }
        </Col>
      </Row>
    );
  }
}
