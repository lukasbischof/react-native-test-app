import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router } from './app/router';

export default class App extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

AppRegistry.registerComponent('ReactNativeTestApp', () => App);