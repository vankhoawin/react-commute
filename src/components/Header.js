import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={12} lg={12}>
          <nav style={ styles }>
            <ul>
              <li><Link to="/statistics">Statistics</Link></li>
              <li><a href="#">&lt;-</a></li>
              <li><a href="#">-&gt;</a></li>
              <li><Link to="/">Import</Link></li>
              <li><a href="#">Export</a></li>
              <li><a href="#">Reset</a></li>
            </ul>
          </nav>
        </Col>
        <Col xs={12} lg={12}>
          { this.props.children }
        </Col>
      </Row>
    );
  }
}

export default CSSModules(Header, styles);
