import React, { Component } from 'react';
import { connect } from 'react-redux';
import { importData } from '../actions';

@connect(state => ({ commuteData: state.commuteData }))
export default class CommuteDataInput extends Component {
  constructor(props) {
    super(props);
    this.handleCommuteInput = this.handleCommuteInput.bind(this);
  }

  handleCommuteInput(e) {
    const { dispatch } = this.props;
    let commuteData = document.getElementById('commute-data-text').value;
    let [ headers, ...rows ] = commuteData.split('\n');

    dispatch(importData({
      headers: headers.split(','),
      rows: rows.map(row => (row.split(',')))
    }));
  }

  render() {
    return (
      <div>
        <textarea id="commute-data-text" />
        <button onClick={ this.handleCommuteInput }>Import Data</button>
      </div>
    );
  }
}