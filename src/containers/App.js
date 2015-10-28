import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Grid } from 'react-bootstrap';

import { createStore, renderDevTools } from '../utils/devTools';

import CommuterRouter from './CommuterRouter';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Grid>
        <Provider store={ store }>
          <CommuterRouter />
        </Provider>

        { renderDevTools(store) }
      </Grid>
    );
  }
}
