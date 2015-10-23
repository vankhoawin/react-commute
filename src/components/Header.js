import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
      <ul>
        <li><button>Home</button></li>
        <li><button>Save</button></li>
        <li><button>Import</button></li>
      </ul>
    );
  }
}