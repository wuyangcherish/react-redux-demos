import React from 'react';
import CounterApp from './CounterApp';
import { createRedux } from 'redux';
import { Provider } from 'react-redux';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class App extends React.Component{
  render() {
    return (
      <Provider redux={redux}>
        {() => <CounterApp />}
      </Provider>
    );
 
  }
}