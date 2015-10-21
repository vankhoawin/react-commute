import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Save</a></li>
        <li><a href="#">Load</a></li>
      </ul>
    );
  }
}