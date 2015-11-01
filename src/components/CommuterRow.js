import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from '../styles/CommuterRow.scss';
import { CommuterCell } from '../components';


@CSSModules(styles)
export default class CommuterRow extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovering: false }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ isHovering: true });
  }

  handleMouseLeave() {
    this.setState({ isHovering: false });
  }

  render() {
    const { row, isHeader } = this.props;
    const { isHovering } = this.state;

    return (
      <tr
        styleName="commuter-row"
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }>
        { row.map((cell, index) => (
          <CommuterCell
            key={ index }
            cell={ cell }
            isHeader={ isHeader }
          />
        )) }
        { !isHeader && isHovering &&
          <td className={ isHovering ? 'hover' : '' }>X</td>
        }
      </tr>
    );
  }
}
