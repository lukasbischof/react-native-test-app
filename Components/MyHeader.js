import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class MyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let titleStyle = {
      fontSize: 40,
      marginTop: 20,
      marginBottom: 20,
      textAlign: 'center'
    };

    return (
      <View testID={this.props.testID}>
        <Text testID="myheadertext" style={titleStyle}>{this.props.content}</Text>
      </View>
    );
  }
}
