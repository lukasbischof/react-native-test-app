import React, { Component } from 'react';
import { Text } from 'react-native';

export default class MyHeader extends React.Component {
  render() {
    let titleStyle = {
      fontSize: 40,
      marginTop: 20,
      marginBottom: 20,
      textAlign: 'center'
    };

    return (
      <Text style={titleStyle}>{this.props.content}</Text>
    );
  }
}
