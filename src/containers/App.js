import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../utils/devTools';

import CommuterApp from './CommuterApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={ store }>
          { () => <CommuterApp /> }
        </Provider>

        { renderDevTools(store) }
      </div>
    );
  }
}
