import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

import styles from '../styles/CommuterRow.scss';
import { CommuterCell } from '../components';
import calculateStatistics from '../utils/calculateStatistics';
import { deleteRow } from '../actions';


@connect(state => ({ commuteData: state.commuteData }))
@CSSModules(styles)
export default class CommuterRow extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovering: false }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleMouseEnter() {
    this.setState({ isHovering: true });
  }

  handleMouseLeave() {
    this.setState({ isHovering: false });
  }

  handleDeleteClick(e) {
    const { index, dispatch } = this.props;
    const { headers, rows } = this.props.commuteData;

    let sliced = [...rows.slice(0, index), ...rows.slice(index + 1)];
    let newStats = calculateStatistics(headers, sliced);
    dispatch(deleteRow(newStats));
  }

  render() {
    const { row, isHeader } = this.props;
    const { isHovering } = this.state;

    return (
      <tr
        styleName="commuter-row"
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }
      >
        { row.map((cell, index) => (
          <CommuterCell
            key={ index }
            cell={ cell }
            isHeader={ isHeader }
          />
        )) }

        { !isHeader &&
          <td
            styleName="row-delete"
            onClick={ this.handleDeleteClick }
          >
            { isHovering ? 'X' : ''}
          </td>
        }

      </tr>
    );
  }
}
